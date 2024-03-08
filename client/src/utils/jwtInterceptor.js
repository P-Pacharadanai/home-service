import axios from "axios";
import supabase from "./supabaseClient";

function jwtInterceptor() {
  axios.interceptors.request.use(async (req) => {
    const { data } = await supabase.auth.getSession();
    const hasToken = Boolean(data?.session?.access_token);

    if (hasToken) {
      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${data?.session?.access_token}`,
      };
    }

    return req;
  });

  axios.interceptors.response.use(
    (req) => {
      return req;
    },
    async (error) => {
      console.log(error);
      if (
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        await supabase.auth.signOut();
        window.location.replace("/login");
      }
      return Promise.reject(error);
    }
  );
}

export default jwtInterceptor;
