import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseClient.js";

const AuthContext = createContext();

function AuthProvider(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const register = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      console.log("register data:", data);
      console.log("register error:", error);
      if (error) {
        console.error(error);
      }
      // navigate("/login");
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  const login = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // console.log("login data:", data);
      console.log("login user:", user);
      if (error) {
        console.error("login error:", error);
      }
      // setState({ ...state, user: user });
      // navigate("/");
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setState({ ...state, user: null });
      if (error) {
        console.error("logout error:", error);
      }
      // navigate("/login");
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  // const isAuthenticated = Boolean(localStorage.getItem("token"));
  // const isAdmin =

  return (
    <AuthContext.Provider value={{ state, login, logout, register }}>
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
