var express = require('express');
var router = express.Router(); 
const {body, validationResult} = require("express-validator")

router.get('/', function(req, res) {
    res.render('pages/index')
})

router.get('/sobre', function (req, res) {
    res.render('pages/sobre')
})

router.get('/doacao', function (req, res) {
    res.render('pages/doacao')
})

router.get('/contato', function (req, res) {
    res.render('pages/contato')
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

router.get('/noticia03', function(req, res) {
    res.render('pages/noticia03')
})

router.get('/noticia04', function(req, res) {
    res.render('pages/noticia04')
})

router.get('/noticia05', function(req, res) {
    res.render('pages/noticia05')
})

router.get('/noticia06', function(req, res) {
    res.render('pages/noticia06')
})

router.get('/ranking25', function(req, res) {
    res.render('pages/ranking25')
})

router.get('/ranking24', function(req, res) {
    res.render('pages/ranking24')
})

router.get('/ranking23', function(req, res) {
    res.render('pages/ranking23')
})

router.get('/ranking22', function(req, res) {
    res.render('pages/ranking22')
})

router.get('/ranking21', function(req, res) {
    res.render('pages/ranking21')
})

router.get('/ranking20', function(req, res) {
    res.render('pages/ranking20')
})



//login
router.get("/", (req, res) => {
    res.render("pages/login", {listaErros: null, valores:{login_email:"", login_password:""}})
})

router.post("/login",
    body("login_email").isEmail().withMessage("Email inválido"),
    body("login_password").isLength({min:6}).withMessage("Senha inválida"),
    
    (req, res) => {
        const listaErros = validationResult(req)

        //receber dados do formulário
        if(listaErros.isEmpty()){

            res.render("pages/login", { 
                    listaErros: null, 
                    valores:req.body
                })
        }else{
            res.render("pages/login", {
                listaErros: listaErros, 
                valores:req.body
                })
            console.log(listaErros)
        }
    }
)

module.exports = router;