var morgan      = require('morgan');
var bodyParser  = require('body-parser');

module.exports = function (app, express) {
  // var trackRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  // app.use('/api/tracks', trackRouter);
  // require('../tracks/trackRoutes.js')(trackRouter);
};
