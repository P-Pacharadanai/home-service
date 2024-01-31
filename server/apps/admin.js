import supabase from "../utils/db.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/:id", async (req, res) => {
  try {
    const adminId = req.params.id;

    const { data, error } = await supabase
      .from("admin")
      .select()
      .eq("admin_id", adminId);

    if (error) {
      return console.error(error);
    }

    return res.json({ data: data });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default adminRouter;
