import { Router, query } from "express";
import supabase from "../utils/db.js";
import multer from "multer";

const serviceRouter = Router();
const storage = multer.memoryStorage();
const imageUpload = multer({ storage: storage }).fields([{ name: "image" }]);

serviceRouter.post("/", imageUpload, async (req, res) => {
  const file = req.files.image[0];
  const serviceName = req.body.name;
  const categoryId = req.body.category_id;
  const subService = JSON.parse(req.body.subService);

  const subServicePrice = subService.map((item) => item.price);
  const sortPrice = subServicePrice.sort((a, b) => a - b);

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
      .insert({
        name: serviceName,
        price: sortPrice[0],
        category_id: categoryId,
        image: imagePath,
      })
      .select();

    const serviceId = service[0].service_id;

    const newSubService = subService.map((item) => ({
      ...item,
      service_id: serviceId,
    }));

    const { data: serviceList } = await supabase
      .from("service_list")
      .insert(newSubService)
      .select();

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
      .select(
        `*,service_list(service_list_id,title,price,unit), categories(id,name, background_color, text_color)`
      )
      .eq("service_id", serviceId)
      .order("service_list_id", {
        referencedTable: "service_list",
        ascending: true,
      });

    if (error) {
      console.error(error.message);
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

serviceRouter.put("/update", imageUpload, async (req, res) => {
  const serviceId = req.body.serviceId;
  const serviceName = req.body.name;
  const categoryId = req.body.category_Id;
  const subService = JSON.parse(req.body.subService);

  const subServicePrice = subService.map((item) => item.price);
  const sortPrice = subServicePrice.sort((a, b) => a - b);

  try {
    let imagePath = null;

    if (Object.keys(req.files).length) {
      const file = req.files?.image[0];

      const { data: image, error } = await supabase.storage
        .from("image")
        .upload(
          `services-image/${Date.now() + "_" + file.originalname}`,
          file.buffer,
          {
            contentType: file.mimetype,
          }
        );

      if (error) {
        console.error("Error:", error);
        return res.status(400).json({ message: error.message });
      }

      imagePath = `https://gjmjphpjtksranfvtdqg.supabase.co/storage/v1/object/public/${image.fullPath}`;
    }

    let getServiceData = supabase.from("services");

    if (imagePath === null) {
      getServiceData = getServiceData
        .update({
          name: serviceName,
          price: sortPrice[0],
          category_id: categoryId,
          updated_at: new Date(),
        })
        .eq("service_id", serviceId)
        .select();
    } else {
      getServiceData = getServiceData
        .update({
          name: serviceName,
          price: sortPrice[0],
          category_id: Number(categoryId),
          image: imagePath,
          updated_at: new Date(),
        })
        .eq("service_id", serviceId)
        .select();
    }

    const { data: service, error: serviceError } = await getServiceData;

    if (serviceError) {
      return res.status(400).json({ message: serviceError.message });
    }

    const subServiceAddServiceId = subService.map((item) => ({
      ...item,
      service_id: serviceId,
    }));
    const newSubService = subServiceAddServiceId.filter(
      (item) => !item.service_list_id
    );
    const updateSubService = subServiceAddServiceId.filter(
      (item) => item.service_list_id
    );

    const { data: updatedServiceList, error: updateError } = await supabase
      .from("service_list")
      .upsert(updateSubService)
      .select();

    if (updateError) {
      return res.status(400).json({ message: updateError.message });
    }

    const { data: newServiceList, error: insertError } = await supabase
      .from("service_list")
      .insert(newSubService)
      .select();

    if (insertError) {
      return res.status(400).json({ message: insertError.message });
    }

    res.json({ data: [service, updatedServiceList, newServiceList] });
  } catch (error) {
    return res.json({ message: error });
  }
});

serviceRouter.delete("/:serviceId", async (req, res) => {
  try {
    const serviceId = req.params.serviceId;

    const { error } = await supabase
      .from("services")
      .delete()
      .eq("service_id", serviceId);

    if (error) {
      return res.json({ message: error.message });
    }

    return res.json({
      message: "service list has been deleted",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

serviceRouter.delete("/list/:serviceListId", async (req, res) => {
  try {
    const serviceListId = req.params.serviceListId;
    const { error } = await supabase
      .from("service_list")
      .delete()
      .eq("service_list_id", serviceListId);

    if (error) {
      return res.json({ message: error.message });
    }

    return res.json({
      message: "service list has been deleted",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export default serviceRouter;
