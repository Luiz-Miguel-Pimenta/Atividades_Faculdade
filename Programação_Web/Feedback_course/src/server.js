import express from "express";
import path from "node:path"

import { router } from "./routes/index.js";

const app = express()

const PORT = 3000
const FEEDBACKS = []

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(process.cwd(), "public")));

app.use(router)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})