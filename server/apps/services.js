import { Router, query } from "express";
import supabase from "../utils/db.js";

const serviceRouter = Router();

serviceRouter.get("/", async (req, res) => {
  try {
    const { keyword, category, min, max, sortBy } = req.query;
    // retrieve all user profile from the "services" table
    let query, asc;
    switch (sortBy) {
      case "":
        (query = "service_id"), (asc = true);
        break;
      case "ASC":
        (query = "price"), (asc = true);
        break;
      case "DESC":
        (query = "price"), (asc = false);
        break;
    }

    let { data: services, error } = await supabase
      .from("services")
      .select(`*`)
      .like("name", `%${keyword}%` || "%")
      .like("category", category || "%")
      .gte("price", min)
      .lte("price", max)
      .order(query, { ascending: asc });

    //check if there's an error during the data retrieval
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

serviceRouter.get("/:serviceId/list", async (req, res) => {
  try {
    const serviceId = req.params.serviceId;

    const { data: service_list, error } = await supabase
      .from("service_list")
      .select(`*, services(name,image)`)
      .eq("service_id", serviceId)
      .order("price", { ascending: true });

    if (error) {
      return res.json({ message: error });
    }

    return res.json({
      data: service_list,
    });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default serviceRouter;
