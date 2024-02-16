import supabase from "../utils/db.js";
import { Router } from "express";

const orderRouter = Router();

orderRouter.get("/", async (req, res) => {
  try {
    const { user_id } = req.query;

    let { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", 20);

    //check if there's an error during the data retrieval
    if (error) {
      return res.json({ message: error });
    }

    //send the retrieved services profile as a JSON response
    return res.json({ data: orders });
  } catch (error) {
    return res.json({ message: error });
  }
});

orderRouter.post("/", async (req, res) => {
  const { userId, serviceListId } = req.body;
  try {
    const { data: informationData, error: informationError } = await supabase
      .from("service_infomation")
      .insert({
        house_number: "123/45",
        sub_district: "ตลาดใหญ่",
        district: "เมืองใหญ่",
        provice: "สุวรรณภูมิ",
      })
      .select();

    if (informationError) {
      return res.json({ message: informationError });
    }

    console.log("informationData :", informationData);

    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        service_information_id: informationData[0]?.sevice_information_id,
        status: "รอดำเนินการ",
        available_date: null,
        available_time: null,
        detail: "",
        employee: "สมาน เยี่ยมยอด",
      })
      .select();

    if (orderError) {
      return res.json({ message: orderError });
    }

    console.log("orderData :", orderData);

    const { data, error } = await supabase
      .from("order_service_list")
      .insert({
        order_id: orderData[0]?.order_id,
        service_list_id: serviceListId,
        quantity: 1,
      })
      .select();

    if (error) {
      return res.json({ message: error });
    }

    return res.json({ message: "order has been created" });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default orderRouter;
