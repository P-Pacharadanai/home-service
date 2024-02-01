import supabase from "../utils/db.js";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select();

    if (error) {
      return res.json({ message: error });
    }

    return res.json({ data: data });
  } catch (error) {
    return res.json({ message: error });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("user_id", userId);

    if (error) {
      return res.json({ message: error });
    }

    return res.json({ data: data[0] });
  } catch (error) {
    return res.json({ message: error });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const { firstName, lastName, authUserId } = req.body;
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      auth_user_id: authUserId,
    };

    const { error } = await supabase.from("users").insert(newUser);

    if (error) {
      return res.json({ message: error });
    }

    return res.json({ message: "register success" });
  } catch (error) {
    return res.json({ message: error });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const { data: userData, error: errorUserData } = await supabase
      .from("users")
      .select()
      .eq("user_id", userId);

    if (errorUserData) {
      return res.json({ message: errorUserData });
    }

    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const authId = userData[0].auth_user_id;

    const { data, error } = await supabase.auth.admin.deleteUser(authId);

    console.log("data: ", data);
    if (error) {
      return res.json({ message: error });
    }

    return res.json({ message: "user has been deleted" });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default userRouter;
