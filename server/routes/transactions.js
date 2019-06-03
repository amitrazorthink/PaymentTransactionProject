var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var transactions_controller = require('../controllers/transactions');


// a simple test url to check that all of our files are communicating correctly.

router.get('/test', transactions_controller.test);
router.post('/create', transactions_controller.transaction_create);
router.get('/transactions', transactions_controller.transaction_details);



module.exports = router;