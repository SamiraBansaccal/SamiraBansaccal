const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');

const expressEjsLayout = require('express-ejs-layouts')

const session = require('express-session');

const flash = require('connect-flash');

const passport = require('passport');
require("./config/passport")(passport)

//mongoose connection to db
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected to db'))
.then(() => app.listen(process.env.PORT, () => console.log("Server Up and running on localhost:" + process.env.PORT)))
.catch((err)=> console.log(err));

//so we can access the css
app.use("/static", express.static("public"));

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended : false}));

//express session
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());

 //use flash
app.use(flash());
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error  = req.flash('error');
  next();
})
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

