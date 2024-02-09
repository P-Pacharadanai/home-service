import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseClient.js";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const [isAuthenticated, setIsAuthenticated] = useState({
    status: true,
    role: "unAuthenticated",
  });

  const register = async (formData) => {
    try {
      setState({ ...state, loading: true, error: false });

      //sign up the user using supabase authentication
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
      });

      //check if there's an error during sign up
      if (error) {
        setState({ ...state, loading: false, error: true });
        return console.error("register error:", error);
      }

      createUserProfile(data, formData);
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  const login = async (formData) => {
    try {
      setState({ ...state, loading: true, error: false });
      //sign in the user using supabase authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      //check if there's an error during sign in
      if (error) {
        setState({ ...state, loading: false, error: true });
        return console.error("login error:", error);
      }
      setState({ ...state, loading: false });
      navigate("/");
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  // const loginWithFacebook = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.signInWithOAuth({
  //       provider: "facebook",
  //     });
  //     if (error) {
  //       return console.error("facebook login error:", error);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during facebook login:", error);
  //   }
  // };

  const logout = async () => {
    try {
      //sign out the user using supabase authentication
      const { error } = await supabase.auth.signOut();

      //check if there's an error during sign out
      if (error) {
        return console.error("logout error:", error);
      }

      navigate("/");
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  const createUserProfile = async (data, formData) => {
    try {
      //check whether the user has previously registered or not
      if (data.user.identities.length ?? 0 !== 0) {
        navigate("/login");

        //if the user does not exist, create user profile in database
        await axios.post("http://localhost:4000/users", {
          authUserId: data.user.id,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });

        setState({ ...state, loading: false });
      } else {
        setState({ ...state, loading: false, error: true });
        return console.error("user already exists.");
      }
    } catch (error) {
      return console.error(
        "An error occurred during create user profile:",
        error
      );
    }
  };

  const getUserProfile = async () => {
    try {
      //retrieve authenticated user information after successful login
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      //check if authentication was successful
      if (authUser) {
        setIsAuthenticated({
          status: true,
          role: authUser.role,
        });
      }

      //determine the API endpoint based on the user's role
      const profileApi =
        authUser.role === "authenticated"
          ? `http://localhost:4000/users/${authUser.id}`
          : `http://localhost:4000/admin/${authUser.id}`;

      //retrieve user profile by authenticated user id from database
      const userProfile = await axios.get(profileApi);

      //extract user profile from the response
      const userData = userProfile.data.data;

      //determine the role ID based on the user's role
      const roleId =
        authUser.role === "authenticated"
          ? userData.user_id
          : userData.admin_id;

      //update user information in the application state
      setState({
        ...state,
        user: {
          userId: roleId,
          firstName: userData.first_name,
          lastName: userData.last_name,
          email: authUser.email,
        },
      });
    } catch (error) {
      return console.error("An error occurred during get user profile:", error);
    }
  };

  const removeUserProfile = () => {
    //removing user profile
    setState({ ...state, user: null });

    //reset authenticated status
    setIsAuthenticated({
      status: false,
      role: "unAuthenticated",
    });
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        getUserProfile();
      } else if (event === "SIGNED_OUT") {
        removeUserProfile();
      }
    });

    // call unsubscribe to remove the callback
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const value = {
    state,
    login,
    logout,
    register,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
