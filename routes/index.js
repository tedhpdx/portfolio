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

router.get('/esl', (req, res) => {
    res.render('work_experience/esl/esl_index.ejs')
});

router.get('/ih_bangkok', (req, res) => {
    res.render('work_experience/esl/ih_bangkok.ejs')
});

router.get('/ila_vietnam', (req, res) => {
    res.render('work_experience/esl/ila_vietnam.ejs')
});

router.get('/lsa', (req, res) => {
    res.render('work_experience/esl/lsa.ejs')
});

router.get('/food', (req, res) => {
    res.render('work_experience/food/food_index.ejs')
});

router.get('/boh', (req, res) => {
    res.render('work_experience/food/boh.ejs')
});

router.get('/foh', (req, res) => {
    res.render('work_experience/food/foh.ejs')
});

router.get('/management', (req, res) => {
    res.render('work_experience/mgmt/mgmt_index.ejs')
});

router.get('/customer_service', (req, res) => {
    res.render('work_experience/customer_service/customer_service_index.ejs')
});

router.get('/smarsh', (req, res) => {
    res.render('work_experience/customer_service/smarsh.ejs')
});

router.get('/aa', (req, res) => {
    res.render('work_experience/customer_service/aa.ejs')
});

router.get('/nordstrom', (req, res) => {
    res.render('work_experience/customer_service/nordstrom.ejs')
});

router.get('/eyesave', (req, res) => {
    res.render('work_experience/customer_service/eyesave.ejs')
});

router.get('/mgmt', (req, res) => {
    res.render('work_experience/mgmt/mgmt_index.ejs')
});

router.get('/aa_mgmt', (req, res) => {
    res.render('work_experience/mgmt/aa_mgmt.ejs')
});

router.get('/food_mgmt', (req, res) => {
    res.render('work_experience/mgmt/food_mgmt.ejs')
});

router.get('/esl_mgmt', (req, res) => {
    res.render('work_experience/mgmt/esl_mgmt.ejs')
});

router.get('/eyesave_mgmt', (req, res) => {
    res.render('work_experience/mgmt/eyesave_mgmt.ejs')
});

router.get('/food_mgmt', (req, res) => {
    res.render('work_experience/mgmt/food_mgmt.ejs')
});

router.get('/portland_state', (req, res) => {
    res.render('school/portland_state.ejs')
});

router.get('/new_school', (req, res) => {
    res.render('school/new_school.ejs')
});

router.get('/outdoors', (req, res) => {
    res.render('likes/outdoors/outdoors_index.ejs')
});

router.get('/camping', (req, res) => {
    res.render('likes/outdoors/camping.ejs')
});

router.get('/fishing', (req, res) => {
    res.render('likes/outdoors/fishing.ejs')
});

router.get('/foraging', (req, res) => {
    res.render('likes/outdoors/foraging.ejs')
});

router.get('/travel', (req, res) => {
    res.render('likes/travel/travel_index.ejs')
});

router.get('/british_isles', (req, res) => {
    res.render('likes/travel/british_isles.ejs')
});

router.get('/europe', (req, res) => {
    res.render('likes/travel/europe.ejs')
});

router.get('/mexico', (req, res) => {
    res.render('likes/travel/mexico.ejs')
});

router.get('/middle_east', (req, res) => {
    res.render('likes/travel/middle_east.ejs')
});

router.get('/se_asia', (req, res) => {
    res.render('likes/travel/se_asia.ejs')
});

router.get('/computers', (req, res) => {
    res.render('likes/computers/computers_index.ejs')
});

router.get('/gaming', (req, res) => {
    res.render('likes/computers/gaming.ejs')
});

router.get('/hardware', (req, res) => {
    res.render('likes/computers/hardware.ejs')
});

router.get('/programming', (req, res) => {
    res.render('likes/computers/programming.ejs')
});



module.exports = router