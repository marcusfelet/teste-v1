'use strict';
const config = require('../app/config/config');
const app = require('../app');
const http = require('http');
const db = require('../app/mongo/mongoConnection');
var server = null;

config.loadEnv()
  .then(function (result) {
    console.log(result);

    app.set('port', config.getPort());
    return db.connect(config.getDbURL());
  })
  .then(function(result) {


    process.db = db;

    console.log('Conectado com sucesso.');
    console.log('Iniciando o server.');
    server = http.createServer(app);
    server.listen(config.getPort());
    server.on('error', onError);
    server.on('listening', onListening);


  })
  .catch(function (err) {
    if (err.errno === -4058 ) {
      console.log('Arquivo de configuração não encontrado.');
      console.log('Deve ser criado na raiz do projeto com o nome "deploy.env".');
    }
    else if (err.code === 18) {
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