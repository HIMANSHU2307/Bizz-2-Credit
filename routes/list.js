var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://himanshu:himanshu23@ds035583.mlab.com:35583/buzzcredit', ['serviceprovider']);



// Get All lists
router.get('/list', function(req, res, next){
    db.serviceprovider.find(function(err, serviceproviders){
        if(err){
            res.send(err);
        }
        res.json(serviceproviders);
    });
});

// Get Single list
router.get('/list/:id', function(req, res, next){
    db.serviceprovider.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, serviceproviders){
        if(err){
            res.send(err);
        }
        res.json(serviceproviders);
    });
});



module.exports = router;