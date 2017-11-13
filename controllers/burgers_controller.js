const router = require('express').Router();
const bodyParser = require('body-parser');
const db = require('../models');

let urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/', (req, res) => {
    res.redirect('/index');
});

/**
 * index page
 */
router.get('/index', (req, res) => {
    db.burger.findAll({}).then((results) => {
        res.render('index', { burgs: results });
    });
});

/**
 * Same as ORM previously built but
 * uses sequelize to update row based on ID
 */
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

/**
 * Uses sequelize to remove row based on ID
 * /remove URI is appending to all burgers in hbs layout
 */
router.get('/index/:burgerId/remove', (req, res) => {
    db.burger.destroy({
        where: {
            id: req.params.burgerId
        }
    }).then((results) => {
        res.redirect('/');
    });
});

/**
 * POST handler for new burgers
 * creates new entry
 */
router.post('/index', urlencodedParser, (req, res) => {
    db.burger.create({
        burger_name: req.body.burger
    }).then((results) => {
        res.redirect('/');
    });
});

module.exports = router;
