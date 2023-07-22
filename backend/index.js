// import yang dibutuhkan
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// gunakan fungsi ini untuk bisa membuat format json
app.use(cors());
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running..");
});
