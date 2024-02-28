import supabase from "../utils/db.js";
import { Router } from "express";

const adminServiceRouter = Router();

adminServiceRouter.get("/", async (req, res) => {
  try {
    let { data: admin_service, error } = await supabase
      .from("admin_service")
      .select("*");

    if (error) {
      return console.error(error);
    }

    return res.json({ data: data[0] });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default adminServiceRouter;
