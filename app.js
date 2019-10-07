const express = require('express');
const app = express();
app.set('view engine','ejs')
app.use('/assets',express.static(__dirname+'/assets'));

app.get('/',(req,res)=>{
  res.render('home');
})
app.get('/login',(req,res)=>{
  res.render('login');
})
app.get('/register',(req,res)=>{
  res.render('register');
})
app.listen(3000);
console.log('Listening at 3000');
