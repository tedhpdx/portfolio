const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/contact', (req, res) => {
    res.render('contact/contact.ejs')
});

router.get('/tldr', (req, res) => {
    res.render('tldr/tldr_index.ejs')
});

router.get('/future', (req, res) => {
    res.render('future/future_index.ejs')
});

module.exports = router