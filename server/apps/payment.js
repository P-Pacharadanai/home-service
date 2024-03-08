import { Router } from "express";
import stripe from "stripe";
import { protect } from "../middlewares/protect.js";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const paymentRouter = Router();
paymentRouter.use(protect);

paymentRouter.post("/create", async (req, res) => {
  const { amount } = req.body;
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripeInstance.paymentIntents.create({
      payment_method_types: ["promptpay", "card"],
      amount: amount * 100,
      currency: "thb",
    });

    return res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.json({ message: error });
  }
});
export default paymentRouter;
