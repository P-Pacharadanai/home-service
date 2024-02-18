import supabase from "../utils/db.js";
import { Router } from "express";

const orderRouter = Router();

orderRouter.post("/", async (req, res) => {
  const { userId, serviceOrder, fullAddress, bookingDate, bookingTime, note } =
    req.body;

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

    return res.json({ message: "order has been created" });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default orderRouter;
