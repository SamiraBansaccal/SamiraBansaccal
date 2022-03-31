const express = require('express');
const router  = express.Router();

router.get('/dashboard',(req,res)=>{
  res.render('dashboard',{
    user: req.user
    });
})
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

module.exports = router;
