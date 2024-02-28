import { Router } from "express";
import supabase from "../utils/db.js";

const promotionRouter = Router();

promotionRouter.get("/", async (req, res) => {
  try {
    const promotionCode = req.query.code;

    const { data, error } = await supabase
      .from("promotion")
      .select()
      .eq("code", promotionCode);

    if (error) {
      return res.json({ message: error });
    }

    if (data && data[0]?.usage_count < data[0]?.usage_limit) {
      const { data: updateData, error: updateError } = await supabase
        .from("promotion")
        .update({ usage_count: data[0]?.usage_count + 1 })
        .eq("code", promotionCode)
        .select();

      if (updateError) {
        return res.json({ message: updateError });
      }

      return res.json({
        data: updateData[0],
      });
    }

    return res.json({
      message: "ไม่มีโค้ดส่วนลดหรือไม่สามารถใช้โค้ดส่วนลดนี้ได้",
    });
  } catch (error) {
    return res.json({ message: error });
  }
});

promotionRouter.post("/", async (req, res) => {
  try {
    const {
      promotionCode,
      promotionType,
      fixedDiscount,
      percentDiscount,
      usageLimit,
    } = req.body;

    const { data, error } = await supabase
      .from("promotion")
      .insert({
        code: promotionCode,
        type: promotionType,
        usage_limit: usageLimit,
        discount: fixedDiscount,
        percentDiscount,
      })
      .select("*");

    if (error) {
      return res.json({ message: error });
    }

    return res.json({
      data: data[0],
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export default promotionRouter;
