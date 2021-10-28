let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');

// connect to our List Model
let List = require('../models/list');

/* GET List page. */
router.get('/', (req, res, next) => {
    List.find((err, List) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('list', {title: 'List', List: List})            
        }
    });
});


module.exports = router;
