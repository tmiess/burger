// incorporate modules
var express = require("express");

// create router for app
var router = express.Router();

// import burger.js
var burger = require("../models/burger.js");

// create all routes and set up logic
router.get("/", function(req, res) {

    // show all burgers
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    // create new burger
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        //send back ID of new burger
        res.json({ id: data.id });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    // update one burger to "devoured" burger
    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

// export router
module.exports = router;
