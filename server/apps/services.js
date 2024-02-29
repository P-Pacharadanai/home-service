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
    const { keyword, category, min, max, sortBy } = req.query;

    if (category || min || max || sortBy) {
      console.log("A");
      // retrieve all user profile from the "services" table
      let sort, asc;
      switch (sortBy) {
        case "ASC":
          (sort = "price"), (asc = true);
          break;
        case "DESC":
          (sort = "price"), (asc = false);
          break;
        default:
          (sort = "category_id"), (asc = true);
          break;
      }

      let query = supabase
        .from("services")
        .select(`*,categories(name,background_color,text_color)`);

      if (Number(category) !== 0) {
        query = query.eq("category_id", Number(category));
      }

      let { data: services, error } = await query
        .like("name", `%${keyword}%` || "%")
        .gte("price", min)
        .lte("price", max)
        .order(sort, { ascending: asc });

      if (error) {
        console.log("Error:", error);
        return res.json({ message: error });
      }

      console.log("Data:", services);
      return res.json({ data: services });

      //check if there's an error during the data retrieval

      //send the retrieved services profile as a JSON response
    } else {
      console.log("B");
      let newKeyword;
      if (keyword.trim() !== "") {
        newKeyword = `%${keyword}%`;
      } else {
        newKeyword = "%";
      }

      const { data: services, error } = await supabase
        .from("services")
        .select(`*,categories(name,background_color,text_color)`)
        .ilike("name", newKeyword)
        .order("category_id", { ascending: true });

      if (error) {
        return res.json({ message: error });
      }

      return res.json({ data: services });
    }
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
