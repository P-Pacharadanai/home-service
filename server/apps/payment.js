import { Router } from "express";
import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const paymentRouter = Router();
//const router = Router();

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


{/*
router.post("/create", async (req, res) => {
  const { totalOrderPrice } = req.body;

  const paymentSucess = product.map((product) => ({
    price_date:{
      currency: "THB",
      product_data:{
        name:product.name,
        image:[product.image]
      },
      unit_amount: Math.round(totalOrderPrice * 100),
  },
  quantity:product.quantity
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "promptpay"],
    line_items: lineItems,
    mode: "payment",
    success_url:"http://localhost:5175/payment-success",
    cancel_url:""
  })

  res.json({id:session.id})
})

module.exports = router;
*/}