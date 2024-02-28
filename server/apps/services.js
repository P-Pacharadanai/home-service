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
  console.log(req.body);
  const file = req.files.image[0];
  try {
    const { data, error } = await supabase.storage
      .from("image")
      .upload(
        `services-image/${Date.now() + "_" + file.originalname}`,
        file.buffer,
        {
          contentType: file.mimetype,
        }
      );

    const imagePath = `https://gjmjphpjtksranfvtdqg.supabase.co/storage/v1/object/public/${data.fullPath}`;

    return res.json({ message: data });
  } catch (error) {
    return res.json({ message: error });
  }
});

serviceRouter.get("/", async (req, res) => {
  try {
    const { keyword, category, min, max, sortBy } = req.query;
    let sort, asc;
    switch (sortBy) {
      case "":
        (sort = "service_id"), (asc = true);
        break;
      case "ASC":
        (sort = "price"), (asc = true);
        break;
      case "DESC":
        (sort = "price"), (asc = false);
        break;
    }

    let { data: services, error } = await supabase
      .from("services")
      .select(`*`)
      .like("name", `%${keyword}%` || "%")
      .like("category", category || "%")
      .gte("price", min)
      .lte("price", max)
      .order(sort, { ascending: asc });

    //check if there's an error during the data retrieval
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
