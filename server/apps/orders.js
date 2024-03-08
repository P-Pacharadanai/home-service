import supabase from "../utils/db.js";
import { Router } from "express";
import { protect } from "../middlewares/protect.js";

const orderRouter = Router();
orderRouter.use(protect);

orderRouter.get("/", async (req, res) => {
  try {
    const userId = req.query.user_id;
    const status = req.query.status.split(",");

    let { data: orders, error } = await supabase
      .from("orders")
      .select(
        `order_id, available_date, available_time,total_price,employee,status, service_infomation(*)`
      )
      .eq("user_id", userId)
      .in("status", status)
      .order("order_id", { ascending: false });

    //check if there's an error during the data retrieval
    if (error) {
      return res.json({ message: error.message });
    }

    //send the retrieved services profile as a JSON response
    return res.json({ data: orders });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

orderRouter.get("/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const { data, error } = await supabase
      .from("orders")
      .select(
        `order_id, available_date, available_time, service_infomation(*), order_service_list(*, service_list(title,unit,price)), promotion(type, discount)`
      )
      .eq("order_id", orderId);

    if (error) {
      return res.json({ message: error });
    }

    return res.json({
      data: data[0],
    });
  } catch (error) {
    return res.json({ message: error });
  }
});

orderRouter.get("/:orderId/list", async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const { data, error } = await supabase
      .from("order_service_list")
      .select(`quantity,service_list(title,unit,price)`)
      .eq("order_id", orderId);

    if (error) {
      return res.json({ message: error });
    }

    return res.json({
      data: data,
    });
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
    amountOrderPrice,
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
        total_price: amountOrderPrice,
      })
      .select();

    if (orderError) {
      return res.json({ message: orderError });
    }

    const orderServiceList = serviceOrder.map((item) => ({
      order_id: orderData[0]?.order_id,
      service_list_id: item.service_list_id,
      quantity: item.quantity,
    }));

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
