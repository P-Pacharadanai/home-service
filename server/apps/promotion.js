import { Router } from "express";
import supabase from "../utils/db.js";

const promotionRouter = Router();

promotionRouter.get("/", async (req, res) => {
  try {
    const promotionCode = req.query.code;

    if (Object.keys(req.query).length) {
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
    } else {
      const { data: promotionData, error } = await supabase
        .from("promotion")
        .select()
        .order("promotion_id", { ascending: true });

      if (error) {
        return res.json({ message: error });
      }

      return res.json({
        data: promotionData,
      });
    }
  } catch (error) {
    return res.json({ message: error });
  }
});

//Get all
promotionRouter.get("/:promotionId", async (req, res) => {
  try {
    const promotionId = req.params.promotionId;

    const { data, error } = await supabase
      .from("promotion")
      .select("*")
      .eq("promotion_id", promotionId);
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

//Delete
promotionRouter.delete("/:promotionId", async (req, res) => {
  try {
    const promotionId = req.params.promotionId;
    const { error } = await supabase
      .from("promotion")
      .delete()
      .eq("id", promotionId);

    if (error) {
      return res.json({ message: error.message });
    }

    return res.json({
      message: "code has been deleted",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export default promotionRouter;