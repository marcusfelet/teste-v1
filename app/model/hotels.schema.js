'use strict';

const db = require('../mongo/mongoConnection');

const hotelsSchema = db.mongoose.Schema({
  "hotel": {
    type: String
  },
  "resort": {
    type: String
  },
  "latitude": {
    type: Number
  },
  "longitude": {
    type: Number
  },
  "stars": {
    type: Number
  },
  "tags": [{
      type: String
  }],
  "description": {
    "overview": {
      type: String
    },
    "about": {
      type: String
    },
    "rooms": {
      type: String
    },
    "amenities": {
      type: String
    }
  }
});
const collection = db.database.model('hotels', hotelsSchema);

module.exports = {
  getObjectId: getObjectId,
  collection: collection
};

function getObjectId(id) {
    return db.mongoose.Types.ObjectId(id)
};
