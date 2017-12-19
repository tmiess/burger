// import orm.js
var orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        //calls the orm function "selectAll" which has a cb function inside
        orm.selectAll("burgers", function(err, res) {
            if (err) { return res.status(500).end(); }
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        //calls the orm function "insertOne" which has a cb function inside
        orm.insertOne("burgers", cols, vals, function(err, res) {
            if (err) { return res.status(500).end(); }
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        //calls the orm function "updateOne" which has a cb function inside
        orm.updateOne("burgers", objColVals, condition, function(err, res) {
            if (err) { return res.status(500).end(); }
            cb(res);
        });
    }
};

// export the database function for burgers_controller.js
module.exports = burger;
