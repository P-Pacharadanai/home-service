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
  const {
    userId,
    serviceOrder,
    fullAddress,
    bookingDate,
    bookingTime,
    note,
    promotionCode,
  } = req.body;

  try {
    const { data: informationData, error: informationError } = await supabase
      .from("service_infomation")
      .insert({
        house_number: fullAddress.address,
        sub_district: fullAddress.subdistrict,
        district: fullAddress.district,
        provice: fullAddress.province,
        zipcode: fullAddress.zipcode,
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
        promotion_id: promotionCode.promotion?.promotion_id ?? null,
        status: "รอดำเนินการ",
        available_date: bookingDate,
        available_time: bookingTime,
        detail: note,
        employee: "สมาน เยี่ยมยอด",
      })
      .select();

    if (orderError) {
      return res.json({ message: orderError });
    }

    console.log("orderData :", orderData);

    const orderServiceList = serviceOrder.map((item) => ({
      order_id: orderData[0]?.order_id,
      service_list_id: item.service_list_id,
      quantity: item.quantity,
    }));

    console.log(orderServiceList);

    const { data, error } = await supabase
      .from("order_service_list")
      .insert(orderServiceList)
      .select();

    if (error) {
      return res.json({ message: error });
    }

    return res.json({ data: orderData[0] });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default orderRouter;
