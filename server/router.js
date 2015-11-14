// modules =================================================
var passport = require('passport');
var path = require('path');
var utils = require('./config/utils');

module.exports = function(app, express) {
  // API routes ====================================================
  // status code 401 if unauthorized
  // pass token in req.headers.Authorizaion as 'Bearer [token]'
  var usersRouter = express.Router();
  app.use('/api/users', passport.authenticate('jwt', {session: false}),
    usersRouter);
  require('./users/userRoutes')(usersRouter);

  // authentication routes =========================================
  var authRouter = express.Router();
  app.use('/authenticate', authRouter);
  require('./auth/authRoutes')(authRouter);

  // frontend routes ===============================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};
