const express = require('express');
const router  = express.Router();
//Dashboard page
router.get('/dashboard',(req,res)=>{
  res.render('dashboard',{
    user: req.user
    });
})
//login and register page
router.get('/', (req,res)=>{
    res.render('welcome');
})

module.exports = router;
