var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user-info',(req,res,next) => {
  res.send({
    name:"李云翔",
    age:23,
    job: "一只前端"
  })
})

module.exports = router;

