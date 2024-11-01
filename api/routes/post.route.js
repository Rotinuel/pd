import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
    console.log("hello world!");
})

export default router;