const burger = require('../models/burger');
const router = require('express').Router();
const bodyParser = require('body-parser');
const db = require('../models');

let urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
    // burger.returnBurgers((content) => {
    //     res.render('index', { burgs: content });
    // });
    db.burger.findAll({}).then((results) => {
        res.render('index', { burgs: results });
    });
});

router.post('/index', urlencodedParser, (req, res) => {
    db.burger.insert({
        where: {
            id: req.params.burgerId
        }
    }).then((results) => {
        res.redirect('/');
    });
});

router.post('/index/:burgerId', (req, res) => {
    db.burger.findOne({
        where: {
            id: req.params.burgerId
        }
    }).then((results) => {
        res.redirect('/');
    });
});

module.exports = router;
