import * as http from 'http'
import config from './config/config'

const app = require('./config/express').default()

const server: http.Server = http.createServer(app)

server.listen(config.port)

server.on('error', (e : Error) => {
  console.log('Error :' + e);
});

server.on('listening', () => {
  console.log('Listening on Port ' + config.port);
});

module.exports = server