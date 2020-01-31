const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

router.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

module.exports = router