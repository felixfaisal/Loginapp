const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const passport = require('passport');
app.set('view engine','ejs')
app.use('/assets',express.static(__dirname+'/assets'));
app.use(express.urlencoded({extended:false}));
var users = [];
const initp = require('./passport-config.js');
initp(passport);

app.get('/',(req,res)=>{
  res.render('home');
})
app.get('/login',(req,res)=>{
  res.render('login');
})
app.get('/register',(req,res)=>{
  res.render('register');
})
app.post('/register',async (req,res)=>{
  try{
    const hash = await bcrypt.hash(req.body.password,10);
    users.push({
      name: req.body.username,
      email: req.body.email,
      password: hash
    });
    console.log(users);
    res.redirect('login');
  }
  catch{
    res.redirect('register');
  }
})
app.listen(3000);
console.log('Listening at 3000');
