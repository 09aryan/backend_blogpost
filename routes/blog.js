const express=require("express");
const router=express.Router();

//Import controllers
const{createComment}=require("../controlers/commentControllers");

const {createPost,getAllPosts}=require("../controlers/PostController");
const { likePost, unlikePost } = require("../controlers/LikeController");

//maping controlers

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost); 
router.post("/likes/unlike",unlikePost);
//exprots controllers
module.exports=router;      