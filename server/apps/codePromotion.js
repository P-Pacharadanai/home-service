import { Router } from "express";
import supabase from "../utils/db.js";

const codePromoRouter = Router();

codePromoRouter.get("/", async(req, res) => {
  let { data: code_promotion, error } = await supabase
  .from('code_promotion')
  .select('*')

  if (error) {
    console.error('Error fetching promotion codes:', error);
    return res.status(500).send({ message: "Failed to fetch promotion codes", error });
  }
})

export default codePromoRouter