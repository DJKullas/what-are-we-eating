var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET food listing. */
// Add in api key and use location and radius as variables
router.get('/', function(req, res, next) {
    axios.get(`${req.DATA_I_NEED}`)
    .then(results => {
      console.log("GOOD");
        res.status(200).json(results);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Failure");
    });
});

module.exports = router;
