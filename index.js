import express from "express";
import router from "./routes.js";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 3000;

//configuration
app.use(express.json());

app.use("/api", router);


app.listen(port, () => console.log(`SERVER ONLINE ON PORT ${port}`));