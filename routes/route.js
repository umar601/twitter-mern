import express from "express";

const router = express.Router();

import { homepage,addpost,addcomment,updatepost, update,viewpost,deletepost } from "../controllers/controller.js";


router.get("/",homepage);

router.post("/post",addpost)

router.post("/post/comment/:id",addcomment)

router.get("/post/:id",update)

router.patch("/post/edit/:id",updatepost)

router.get("/post/view/:id",viewpost)

router.delete("/post/delete/:id",deletepost)


export default router;