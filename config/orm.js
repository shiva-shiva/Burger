const db = require( './connection' )('burgers_db','shivamysql1364')

var orm = {

    // selectAll()
    selectAll: function(callback) {
  
      // Run MySQL Query
      db.query('SELECT * FROM burgers', function (err, result) {
        if (err) throw err;
        callback(result);
      });
  
    },
  
    // insertOne()
    insertOne: function(burger_name, callback){
      db.query('INSERT INTO burgers SET ?', {
        burger_name: burger_name,
        devoured: false,
      }, function (err, result) {
        if (err) throw err;
        callback(result);
      });
  
    },
  
    // updateOne()
    updateOne: function(burgerID, callback){
      db.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
          if (err) throw err;
          callback(result);
        });
  
    }
  
  };
  
  
  
  // Export the ORM object in module.exports.
  module.exports = orm;