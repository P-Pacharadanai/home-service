import { Router } from "express";
import supabase from "../utils/db.js";

const serviceRouter = Router();

serviceRouter.get("/", async (req, res) => {
  try {
    const keywords = req.query.keywords;
    const category = req.query.category;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const sortBy = req.query.sortBy;
    // retrieve all user profile from the "services" table
    let { data: services, error } = await supabase.from("services").select("*");
    // .eq("category", category)
    // .gte("price", minPrice)
    // .lte("price", maxPrice);

    //check if there's an error during the data retrieval
    console.log(services);
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
