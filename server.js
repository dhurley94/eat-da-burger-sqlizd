const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const burgers = require('./controllers/burgers_controller');

let app = express();
let db = require('./models');

app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

/**
 * Requiring burgers route
 */
app.use('/', burgers);

/**
 * Creating catchalls for 404 and 500
 */
app.use((req, res, next) => {
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.redirect('/');
});

/**
 * Setting port for heroku per req
 */
app.set('port', (process.env.PORT || 3000));


/**
 * Verifying sequelize before 
 * `app` is init
 */
// db.sequelize.sync({ force: true }).then(() => {
    app.listen(app.get('port'), '0.0.0.0', () => {
        console.log('Listening on port', app.get('port'));
    });
// });
