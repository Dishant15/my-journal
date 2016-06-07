var Datastore = require('nedb'),
    db = new Datastore({ filename: 'data/post_data.db' });
db.loadDatabase(function (err) {
  if(err) throw err;
});

module.exports = db;