const express = require('express')
const router = express.Router()
const checkToken = require('../utils/checkToken')
router.get('/user', checkToken, (req, res, next) => {
  console.log('user')
  console.log(req.headers['authorization'], 'headers authorization')
  const {name} = req.body
  res.send({
    code: 200,
    message: '用户中心',
    data: {
      name
    }
  });
})
module.exports = router