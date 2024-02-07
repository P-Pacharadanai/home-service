import { Router } from "express";
import supabase from "../utils/db.js";

const serviceRouter = Router();

serviceRouter.get("/", async (req, res) => {
  try {
    //retrieve all user profile from the "users" table
    let { data: services, error } = await supabase.from("services").select("*");

    //check if there's an error during the data retrieval
    console.log(services);
    if (error) {
      return res.json({ message: error });
    }

    //send the retrieved user profile as a JSON response
    return res.json({ data: services });
  } catch (error) {
    return res.json({ message: error });
  }
});

serviceRouter.get("/:serviceId", async (req, res) => {
  try {
    const serviceId = req.params.serviceId;

    const { data, error } = await supabase
      .from("services")
      .select()
      .eq("service_id", serviceId);

    if (error) {
      return res.json({ message: error });
    }

    return res.json({ data: data[0] });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default serviceRouter;
