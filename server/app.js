import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./apps/users.js";
import adminRouter from "./apps/admin.js";
import serviceRouter from "./apps/services.js";
import paymentRouter from "./apps/payment.js";
import orderRouter from "./apps/orders.js";
import promotionRouter from "./apps/promotion.js";
import categoryRouter from "./apps/category.js";

async function init() {
  const app = express();
  const port = 4000;

  dotenv.config();

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/users", userRouter);
  app.use("/admin", adminRouter);
  app.use("/service", serviceRouter);
  app.use("/payment", paymentRouter);
  app.use("/order", orderRouter);
  app.use("/promotion", promotionRouter);
  app.use("/category", categoryRouter);

  app.get("/", (req, res) => {
    res.send("App is running...");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not found");
  });

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
