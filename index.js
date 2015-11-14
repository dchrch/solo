var app = require('./server/server');

app.listen(app.get('port'));
console.log('Soundbase listening on port ' + app.get('port'));
