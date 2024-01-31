import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./apps/users.js";
import adminRouter from "./apps/admin.js";

async function init() {
  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/users", userRouter);
  app.use("/admin", adminRouter);
  // app.use("/service", serviceRouter);

  app.get("*", (req, res) => {
    res.status(404).send("Not found");
  });

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
