const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;

// router.get('/:id', async (req, res) => {
//   try {
//     let obj1 = {title: ""}
    
//     const post = await postData.getPostById(req.params.id);
//     res.render('posts/single', { title: "Character Finder", });
//   } catch (e) {
//     res.status(500).json({ error: e });
//   }
// });

router.post("/", async (req, res) => {
  //console.log("hii");
  const formData = req.body['searchTerm'];
  //console.log("hii")
  try {
    //checkSearchTerm(formData.searchTerm);
    const data = await postData.get(formData);
    result1={title: "Character Found",
    res:data[0],
    search:formData
    }
    //console.log("I am there222")
    //console.log(result1.res[0].id)
    res.render("posts/result", result1);
  } catch (e) {
    res.render("shows/Results", { error: true, errorMessage: e });
  }
});


router.get("/:id", async(req, res) => {
 //console.log(req.params.id);
 try {
  //checkSearchTerm(formData.searchTerm);
  const data = await postData.getChar(req.params.id);
  //console.log(data)

  result1={title: "abc",
  res:data.data.results[0].name,
  search:formData
  }
  //console.log("I am there")
  //console.log(result1.res)
  //console.log(data.data.results[0].name)
  //console.log(data.data.results[0].name)
  res.render("posts/sample", result1);
} catch (e) {
  res.json("shows/", { error: true, errorMessage: e });
}
})
//   async function getPeople(){
//     const { data } = await axios.get(url)
//     return data;
//   }
// })


// router.get('/tag/:tag', async (req, res) => {
//   const postList = await postData.getPostsByTag(req.params.tag);
//   res.render('posts/index', { posts: postList });
// });

// router.get('/', async (req, res) => {
//   const postList = await postData.getAllPosts();
//   res.json({msg:hii})
//   //res.render('posts/index', { posts: postList });
// });

// router.post('/', async (req, res) => {
//   let blogPostData = req.body;
//   let errors = [];

//   if (!blogPostData.title) {
//     errors.push('No title provided');
//   }

//   if (!blogPostData.body) {
//     errors.push('No body provided');
//   }

//   if (!blogPostData.posterId) {
//     errors.push('No poster selected');
//   }


//   try {
//     const newPost = await postData.addPost(
//       blogPostData.title,
//       blogPostData.body,
//       blogPostData.tags || [],
//       blogPostData.posterId
//     );

//     res.redirect(`/posts/${newPost._id}`);
//   } catch (e) {
//     res.status(500).json({ error: e });
//   }
// });

// router.put('/:id', async (req, res) => {
//   let updatedData = req.body;
//   try {
//     await postData.getPostById(req.params.id);
//   } catch (e) {
//     res.status(404).json({ error: 'Post not found' });
//     return;
//   }
//   try {
//     const updatedPost = await postData.updatePost(req.params.id, updatedData);
//     res.json(updatedPost);
//   } catch (e) {
//     res.status(500).json({ error: e });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     await postData.getPostById(req.params.id);
//   } catch (e) {
//     res.status(404).json({ error: 'Post not found' });
//     return;
//   }

//   try {
//     await postData.removePost(req.params.id);
//     res.sendStatus(200);
//   } catch (e) {
//     res.status(500).json({ error: e });
//   }
// });

module.exports = router;
