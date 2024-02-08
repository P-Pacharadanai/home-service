import { Router, query } from "express";
import supabase from "../utils/db.js";

const serviceRouter = Router();

serviceRouter.get("/", async (req, res) => {
  try {
    const { keyword, category, min, max, sortBy } = req.query;
    // retrieve all user profile from the "services" table

    let asc;
    if (sortBy === "ASC") {
      asc = true;
    } else {
      asc = false;
    }

    let { data: services, error } = await supabase
      .from("services")
      .select(`*`)
      .like("name", `%${keyword}%` || "%")
      .like("category", category || "%")
      .gte("price", min)
      .lte("price", max)
      .order("price", { ascending: asc });

    //check if there's an error during the data retrieval
    // console.log(`req`, req.query);
    console.log(`service:`, services);
    if (error) {
      return res.json({ message: error });
    }

    //send the retrieved services profile as a JSON response
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
