const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;

router.get("/:id", async(req, res) => {
    //console.log(req.params.id);
    try {
     //checkSearchTerm(formData.searchTerm);
     const data1 = await postData.getChar(req.params.id);
     //console.log(data1)
   
     result1={
        title: "abc",
     res:data1.data.results[0].name,
     comics:data1.data.results[0].comics.items,
     path:   data1.data.results[0].thumbnail.path,
     ext:     data1.data.results[0].thumbnail.extension,
     description: data1.data.results[0].description

     }
     //console.log(data1.data.results[0])
     res.render("posts/sample", result1);
   } catch (e) {
     res.json({ error: true, errorMessage: e });
   }
   })
   module.exports=router;