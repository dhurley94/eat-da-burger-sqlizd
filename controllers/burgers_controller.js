const burger = require('../models/burger');
const router = require('express').Router();
const bodyParser = require('body-parser');
const db = require('../models');

let urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
    db.burger.findAll({}).then((results) => {
        res.render('index', { burgs: results });
    });
});

router.get('/index/:burgerId', (req, res) => {
    db.burger.update({
        devoured: 1
    }, {
        where: {
            id: req.params.burgerId
        }
    }).then((results) => {
        res.redirect('/');
    });
});

router.post('/index', urlencodedParser, (req, res) => {
    db.burger.create({
        burger_name: req.body.burger
    }).then((results) => {
        res.redirect('/');
    });
});

module.exports = router;
