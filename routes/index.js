var express = require('express');
var router = express.Router();

let LoadTestController = require('../controller/loadTestController');

router.post('/loadtest',LoadTestController.checkUrl);


module.exports = router;