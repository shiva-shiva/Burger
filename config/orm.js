

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
      const insertQuery =`INSERT INTO burgers ( burger_name, devoured) VALUES('${burger_name}',false)`
      db.query(insertQuery, function (err, result) {
        if (err) throw err;
        callback(result);
      });
  
    },

    // updateOne()
    updateOne: function(burgerID, callback){
    const updateQuery = `UPDATE burgers SET devoured= true WHERE id = ${burgerID}`
    // Run MySQL Query
    db.query(updateQuery , function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }
  
  };
  
  
  
  // Export the ORM object in module.exports.
  module.exports = orm;