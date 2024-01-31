import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
