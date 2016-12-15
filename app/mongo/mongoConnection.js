'use strict';

const Mongo = require('mongodb'),
    MongoClient = Mongo.MongoClient,
    state = {
        db: null,
    };

exports.connect = function(url) {
  return new Promise(function (resolve, reject) {
    if (state.db)
      resolve();
    else {
      MongoClient.connect(url, function(err, db) {
        if (err)
          reject(err);
        else {
          state.db = db;
          resolve();
        }
      });
    }
  });
};

exports.get = function() {
    return state.db
}

exports.ObjectID = function() {
    return require('mongodb').ObjectID
}

exports.close = function() {
  return new Promise(function (resolve, reject) {
    if (state.db) {
      state.db.close(function(err, result) {
        state.db = null
        state.mode = null
        if (err) 
          reject(err);
        else
          resolve();
      });
    }
    else
      resolve();
  });
  
}
