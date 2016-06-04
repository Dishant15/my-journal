var Datastore = require('nedb'),
    db = new Datastore({ filename: 'data' });
db.loadDatabase(function (err) {
  if(err) throw err;
});

module.exports = db;