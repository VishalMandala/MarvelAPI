const postRoutes = require('./posts');
//onst path = require('path');
const data = require('../data');
const postData = data.posts;
const checkRoutes = require('./dataCheck');


const constructorMethod = (app) => {
  app.use('/search', postRoutes);
  //app.use('/characters', postRoutes);
  

  app.use('/characters',checkRoutes)
    //res.sendFile(path.resolve('/static/about.html'));
    //const data = await postData.getChar(req.params.id);
    //console.log(data);
    //res.render('posts/sample', { title: "character Finder" });
    


  app.get('/', (req, res) => {
    //res.sendFile(path.resolve('/static/about.html'));
    res.render('posts/search', { title: "character Finder" , 
    paragraphs: 'This website provides detailed information about the marvel movies. We also display images with the name of the movie'});
  });

  app.use('*', (req, res) => {
    //res.redirect('/posts');
    
  });
};



module.exports = constructorMethod;
