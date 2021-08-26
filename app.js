const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json())


//loading static assets
app.use('/static',express.static(path.join(__dirname,'public')))        //vertual path of public folder 

//home route
app.get('/', function(req, res) {
  res.render('index', {title: 'IPhone Calculator'});
});


app.post('/calc',(req,res)=>{
  const result= eval(req.body.val)
  return res.json({result})
  
})

//server
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});




//if we mentioned nodemon in package.json   npm start can be used to start the server
//we should set view engine 