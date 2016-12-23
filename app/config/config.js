'use strict';
const fs = require('fs');

module.exports = {
    loadEnv: loadEnv,
    getPort: getPort,
    getDbURL: getDbURL
};

// retorna a porta padrão do app
function getPort() {
  let port = process.env.PORT || 3000;

  if (isNaN(port)) {
    return 3000;
  }

  return port;
};

// retorna a url do mongo
function getDbURL() {
  return process.env.MONGO_DB || 'mongodb://localhost:27017/ttwgroup';
};

// Carrega variáveis de ambiente
function loadEnv() {
  return new Promise(function(resolve, reject) {
    fs.readFile('./deploy.env', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      }
      else {
        let rows = data.split(/\r?\n/);

        for (let i = 0, len = rows.length; i < len; i++) {
          let keyValue = rows[i].split('=');
          process.env[keyValue[0]] = keyValue[1];
        }

        resolve('Variáveis de ambiente carregadas.');
      }
    });
  });
};
