const lpass = require('passport-local');
const bcrypt = require('bcryptjs').strategy;
function initialize(passport){
  const authenticateuser =(username,password)=>{
    const user = getUserByUsername(username);
    if(user==null){
      return done(null,false,{message:"No such user or password"});

    }
    try{
      if(bcrypt.compare(password,user.password)){

      }else{
        return done(null,false,{message:'Password Incorrect'});
      }
      }
      catch(e){
        return done(e);
      }
    }

  passport.use(new lpass(),authenticateuser);
  passport.serializeUser((user,done)=>{});
  passport.deserializeUser((id,done)=>{});
}
module.exports = initialize;
