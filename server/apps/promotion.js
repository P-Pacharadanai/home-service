import { Router } from "express";
import supabase from "../utils/db.js";

const promotionRouter = Router();

promotionRouter.get("/", async (req, res) => {
  try {
    const promotionCode = req.query.code;
    const keyword = req.query.keyword;

    let queryCodeData = supabase.from("promotion").select();

    if (promotionCode) {
      queryCodeData.eq("code", promotionCode);
    }

    if (keyword) {
      queryCodeData.ilike("code", `%${keyword}%`);
    }

    let { data, error } = await queryCodeData.order("promotion_id", {
      ascending: true,
    });

    if (error) {
      return res.json({ message: error });
    }

    if (promotionCode) {
      if (data && data[0]?.usage_count < data[0]?.usage_limit) {
        const { data: updateData, error: updateError } = await supabase
          .from("promotion")
          .update({ usage_count: data[0]?.usage_count + 1 })
          .eq("code", promotionCode)
          .select();

        data = updateData;
        if (updateError) {
          return res.json({ message: updateError.message });
        }
      } else {
        return res.json({
          message: "ไม่มีโค้ดส่วนลดหรือไม่สามารถใช้โค้ดส่วนลดนี้ได้",
        });
      }
    }

    return res.json({
      data: data,
    });
  } catch (error) {
    return res.json({ message: error });
  }
});

//Get id
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
      .eq("promotion_id", promotionId);

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

// Post
promotionRouter.post("/", async (req, res) => {
  try {
    const { promotionData } = req.body;

    const { data, error } = await supabase
      .from("promotion")
      .insert(promotionData)
      .select();

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

//Put
promotionRouter.put("/", async (req, res) => {
  try {
    const promotionData = req.body.promotionData;

    const { data, error } = await supabase
      .from("promotion")
      .upsert(promotionData)
      .select();

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

export default promotionRouter;
