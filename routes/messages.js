var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Patient = require('../models/patient');



router.get('/', function (req, res, next) {

    Patient.find()
        .exec(function (err, users) {

            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: users
            });
        });
});


router.post('/', function (req, res, next) {

        var newpatient = new Patient({
            fname: req.body.fname,
            lname: req.body.lname,
            dob: req.body.dob,
            age: req.body.age,
            gender: req.body.gender,
            cont: req.body.pno,
            pinfo: req.body.pinfo
        });

        newpatient.save(function (err, result) {

            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Saved skill',
                obj: result
            });
        });
    });


module.exports = router;