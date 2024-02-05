import supabase from "../utils/db.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/:authUserId", async (req, res) => {
  try {
    const authUserId = req.params.authUserId;

    const { data, error } = await supabase
      .from("admin")
      .select()
      .eq("auth_user_id", authUserId);

    if (error) {
      return console.error(error);
    }

    return res.json({ data: data[0] });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default adminRouter;
