//const mongoCollections = require('../config/mongoCollections');
//const posts = mongoCollections.posts;
//const users = require('./users');
const uuid = require('uuid/v4');
const axios = require('axios');

async function get(u){
const md5 = require('blueimp-md5');
const publickey = 'bf1fcbfbfde49d8147013b7bc60e96bf';
const privatekey = 'c72c8197905a57d666bc3c5d932ff1622d7f9222';
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);
const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
const url = baseUrl +'nameStartsWith='+u +'&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
//console.log(url);
let {data}=await axios.get(url)
//console.log(data.data.results)
result=[]
if(data.data.results.length <20){
  return data.data.results;
  //console.log("How are you?")
}
else {
for(let i=0;i<20;i++){
  result.push(data.data.results)
}
return result ;
}
}

async function getChar(id){

  const md5 = require('blueimp-md5');
  const publickey = 'bf1fcbfbfde49d8147013b7bc60e96bf';
  const privatekey = 'c72c8197905a57d666bc3c5d932ff1622d7f9222';
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + publickey;
  const hash = md5(stringToHash);
  const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters/';
  const url = baseUrl +id +'?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

  //console.log("Hello")
  //console.log(url);
  let {data} = await axios.get(url)
return data
  }
  


// router.get("/", async(req, res) => {
//   async function getPeople(){
//     const { data } = await axios.get(url)
//     return data;
//   }
// })
// // /*
// router.post("/search", async (req, res) => {
//   const formData = req.body;
//   try {
//     checkSearchTerm(formData.searchTerm);
//     const { data } = await axios.get(url + formData.searchTerm);
//     res.render("shows/searchResults", {
//       searchTerm: formData.searchTerm,
//       show: data.slice(0, 20),
//       error: false,
//     });
//   } catch (e) {
//     res.render("shows/searchResults", { error: true, errorMessage: e });
//   }
// });
// */

module.exports = {
  get,
  getChar
};
