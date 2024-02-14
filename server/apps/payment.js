import { Router } from "express";
import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const paymentRouter = Router();

const calculateOrderAmount = (data) => {
  //   const amount = data.reduce(
  //     (acc, curr) => (acc += curr.price * curr.quantity),
  //     0
  //   );
  return 10;
};

paymentRouter.post("/create", async (req, res) => {
  const data = req.body;
  console.log("data:", data);

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripeInstance.paymentIntents.create({
      payment_method_types: ["promptpay", "card"],
      //   payment_method_types: ["promptpay"],
      // payment_method_types: ["card", "link"],
      amount: calculateOrderAmount(data) * 100,
      currency: "thb",
      //   automatic_payment_methods: {
      //     enabled: true,
      //   },
    });

    return res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.json({ message: error });
  }
});

export default paymentRouter;
