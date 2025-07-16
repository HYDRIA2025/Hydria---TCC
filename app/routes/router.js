var express = require('express');
var router = express.Router(); 

router.get('/', function(req, res) {
    res.render('pages/index')
})

router.get('/login', function(req, res) {
    res.render('pages/login')
})

router.get('/noticia01', function(req, res) {
    res.render('pages/noticia01')
})

router.get('/noticia02', function(req, res) {
    res.render('pages/noticia02')
})

module.exports = router;