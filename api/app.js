import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors({origin: process.env.CLIENT_URL, credentials: true})); 
app.use(express.json())
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);

app.listen(8800, () => {
    console.log("Server is running on port 8800!!!");
});