const express = require("express");

const router = express.Router();
const BlogPost = require("../models/blogPost");

//ROUTES
router.get("/api", (req, res) => {
  BlogPost.find({})
    .then(data => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch(error => {
      console.log("error");
    });
});

// router.post("/api/save", (req, res) => {
//   console.log("Body:", req.body)
//   res.json({
//     msg:"We received your data"
//   });
// });

router.post("/api/save", (req, res) => {
  console.log("Body:", req.body);
  const data = req.body;

  const newBlogPost = new BlogPost(data);

  newBlogPost.save((error)=>{
    if(error){
      res.status(500).json({msg:'Sorry, Intgernal server error!'});
      return;
    }
      return res.json({
        msg:"We saved your data"
      });
    

  });
  
});

module.exports = router;
