import { Router, query } from "express";
import supabase from "../utils/db.js";
import multer from "multer";

const serviceRouter = Router();
const storage = multer.memoryStorage();
const imageUpload = multer({ storage: storage }).fields([{ name: "image" }]);
// const imageUpload = multer({ dest: "/upload" }).fields([{ name: "image" }]);
// serviceRouter.post("/", async (req, res) => {
//   const { name, category, subService } = req.body;
//   try {
//     const { error } = await supabase.from("services_list").insert();

//     return res.json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     return res.json({ message: error });
//   }
// });

serviceRouter.post("/", imageUpload, async (req, res) => {
  console.log(req.body.subService);
  const file = req.files.image[0];
  const serviceName = req.body.name;
  const categoryId = req.body.category_id;
  const subService = JSON.parse(req.body.subService);
  try {
    const { data: image, error } = await supabase.storage
      .from("image")
      .upload(
        `services-image/${Date.now() + "_" + file.originalname}`,
        file.buffer,
        {
          contentType: file.mimetype,
        }
      );

    const imagePath = `https://gjmjphpjtksranfvtdqg.supabase.co/storage/v1/object/public/${image.fullPath}`;

    const { data: service } = await supabase
      .from("services")
      .insert({ name: serviceName, category: categoryId, image: imagePath })
      .select();

    const serviceId = service[0].service_id;

    const newSubService = subService.map((item) => ({
      ...item,
      service_id: serviceId,
    }));

    console.log(newSubService);

    const { data: serviceList } = await supabase
      .from("service_list")
      .insert(newSubService)
      .select();

    console.log("serviceList", serviceList);
    return res.json({ message: data });
  } catch (error) {
    return res.json({ message: error });
  }
});

serviceRouter.get("/", async (req, res) => {
  try {
    // Extract filter parameters (optional)
    const { keyword, category, min, max, sortBy } = req.query;

    // Build the base query
    const getData = supabase
      .from("services")
      .select(
        `*,service_list(title,price,unit), categories(id,name, background_color, text_color)`
      );

    if (keyword) {
      getData.ilike("name", `%${keyword?.trim() || "%"}%`);
    }

    // Apply optional filtering based on provided parameters
    if (category && Number(category) !== 0) {
      getData.eq("category_id", Number(category));
    }

    if (min) {
      getData.gte("price", min);
    }

    if (max) {
      getData.lte("price", max);
    }

    // Apply sorting (default: category_id asc)
    const sort =
      sortBy === "ASC" || sortBy === "DESC" ? "price" : "category_id";
    const ascending = sortBy === "DESC" ? false : true;

    getData
      .order(sort, { ascending: ascending })
      .order("price", { referencedTable: "service_list", ascending: true });

    console.log(sortBy);
    // Apply keyword filtering (case-insensitive)
    // Execute the getData and handle errorsce
    const { data: services, error } = await getData;

    if (error) {
      console.error("Error:", error);
      return res.status(400).json({ message: error.message }); // Use status code and error message
    }

    // Return the retrieved services as JSON response
    return res.json({ data: services });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" }); // Generic error message for user
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
