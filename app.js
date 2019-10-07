const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  console.log('Home Page');
})
app.get('/login',(req,res)=>{
  console.log('Login page');
})
app.get('/register',(req,res)=>{
  console.log('Register page');
})
app.listen(3000);
console.log('Listening at 3000');
