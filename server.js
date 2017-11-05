const express = require('express');
const exphbs = require('express-handlebars');
const burgers = require('./controllers/burgers_controller');
const path = require('path');

let app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/', burgers);

app.use((req, res, next) => {
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.redirect('/');
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), '0.0.0.0', () => {
    console.log('Listening on port', app.get('port'));
});