'use strict';
const config = require('../app/config/config');
const db     = require('../app/mongo/mongoConnection');
const http = require('http');
var server = null;
var app = null;
config.loadEnv()
  .then(function (result) {
    console.log(result);
    app = require('../app');

    app.set('port', config.getPort());
    return db.open(config.getDbURL());
  })
  .then(function(result) {

    console.log('Conectado com sucesso.');
    console.log('Iniciando o server.');
    server = http.createServer(app);
    server.listen(config.getPort());
    server.on('error', onError);
    server.on('listening', onListening);
  })
  .catch(function (err) {
    if (err.code === 'ENOENT') {
      console.log('Arquivo de configuração não encontrado.');
      console.log('Deve ser criado na raiz do projeto com o nome "deploy.env".');
    }
    else if (err.errno === -1945) {
      console.log('Não foi possível conectar.');
      console.log('Motivo: '+ err.message);
    }
    else
      console.log(err);
    process.exit();
  });

function onError(error) {

  switch (error.code) {
    case 'EACCES':
      console.error('Não possui privilégios');
      process.exit();
      break;
    case 'EADDRINUSE':
      console.error('A porta: ' + config.getPort() + ' já está em uso.');
      process.exit();
      break;
    default:
      throw error;
  }
};

function onListening() {
  console.log('Aguardando conexões na porta: ' + config.getPort());
};
