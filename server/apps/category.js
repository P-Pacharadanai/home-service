import supabase from "../utils/db.js";
import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", async (req, res) => {
  try {
    const { keyword } = req.query;

    if (Object.keys(req.query).length) {
      const { data: categories, error } = await supabase
        .from("categories")
        .select("*")
        .ilike("name", `%${keyword}%` || "%")
        .order("index", { ascending: true });

      if (error) {
        return res.json({ message: error });
      }

      return res.json({
        data: categories,
      });
    } else {
      const { data: categories, error } = await supabase
        .from("categories")
        .select("*")
        .order("index", { ascending: true });

      if (error) {
        return res.json({ message: error });
      }

      return res.json({
        data: categories,
      });
    }
  } catch (error) {
    return res.json({ message: error });
  }
});

categoryRouter.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("id", categoryId);
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

categoryRouter.post("/", async (req, res) => {
  try {
    const { name, bgColor, textColor } = req.body;

    const { data, error } = await supabase
      .from("categories")
      .insert({ name: name, background_color: bgColor, text_color: textColor })
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

categoryRouter.put("/", async (req, res) => {
  try {
    const categories = req.body.categories;
    console.log(categories);

    const { data, error } = await supabase
      .from("categories")
      .upsert(categories)
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

categoryRouter.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { name, bgColor, textColor } = req.body;

    const { data, error } = await supabase
      .from("categories")
      .update({
        name: name,
        background_color: bgColor,
        text_color: textColor,
        updated_at: new Date(),
      })
      .eq("id", categoryId)
      .select();

    if (error) {
      return res.json({ message: error.message });
    }

    return res.json({
      data: data[0],
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

categoryRouter.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("id", categoryId);

    if (error) {
      return res.json({ message: error.message });
    }

    return res.json({
      message: "category has been deleted",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export default categoryRouter;
