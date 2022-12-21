const express = require('express');
const router = express.Router();

router.get('/members', function(req, res){
  console.log("members.js router link successful!");
  res.render("members");
})

module.exports = router;
