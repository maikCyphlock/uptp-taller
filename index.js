const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const chokidar = require('chokidar');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
require('dotenv').config();

const morgan = require('morgan');
const winston = require('winston');

// Configurar logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

app.use(morgan('combined', { 
  stream: { 
    write: message => logger.info(message.trim()) 
  }
}));

// middleware/error-handler.js
function errorHandler(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).render('error.html', { 
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {} 
  });
}

app.use(errorHandler);

// Configuraciones
app.use(express.static(path.join(__dirname, 'public')));
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
});

// Rutas
app.use('/', routes);

// Live Reload
const watcher = chokidar.watch(path.join(__dirname, 'views'), {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

watcher.on('change', (path) => {
  console.log(`File ${path} has been changed`);
  io.emit('reload');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));