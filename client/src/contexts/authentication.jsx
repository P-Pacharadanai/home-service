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
    status: false,
    role: "unAuthenticated",
  });

  const register = async (formData) => {
    try {
      //sign up the user using supabase authentication
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      //check if there's an error during sign up
      if (error) {
        console.error(error);
      }

      //check whether the user has previously registered or not
      if (data.user.identities.length ?? 0 !== 0) {
        //if the user does not exist, create user profile in database
        await axios.post("http://localhost:4000/users", {
          authUserId: data.user.id,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
      } else {
        console.error("user already exists.");
      }
      // navigate("/login");
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  const login = async (formData) => {
    try {
      //sign in the user using supabase authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      //check if there's an error during sign in
      if (error) {
        return console.error("login error:", error);
      }

      //retrieve authenticated user information after successful login
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsAuthenticated({
          status: true,
          role: user.role,
        });
      }

      //access authenticated user id
      const authId = user.id;

      //retrieve user profile by authenticated user id from database
      const userProfile = await axios.get(
        `http://localhost:4000/users/${authId}`
      );

      //extract user profile from the response
      const userData = userProfile.data.data;

      //update user information
      setState({
        ...state,
        user: {
          userId: userData.user_id,
          firstName: userData.first_name,
          lastName: userData.last_name,
          email: user.email,
        },
      });
      // navigate("/");
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  const logout = async () => {
    try {
      //sign out the user using supabase authentication
      const { error } = await supabase.auth.signOut();

      //check if there's an error during sign out
      if (error) {
        return console.error("logout error:", error);
      }

      //removing user information
      setState({ ...state, user: null });
      // navigate("/login");
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  // supabase.auth.onAuthStateChange((event, session) => {
  //   if (event === 'SIGNED_OUT') {
  //     console.log('SIGNED_OUT', session)

  // clear local and session storage
  //     [
  //       window.localStorage,
  //       window.sessionStorage,
  //     ].forEach((storage) => {
  //       Object.entries(storage)
  //         .forEach(([key]) => {
  //           storage.removeItem(key)
  //         })
  //     })
  //   }
  // })

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
