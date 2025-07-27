var express = require('express');
var router = express.Router(); 
const {body, validationResult} = require("express-validator")
var {validarTelefone} = require("../helpers/validacoes");
const { render } = require('ejs');

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

router.get('/enviocont', function(req, res) {
    res.render('pages/enviocont')
})

router.get('/enviodoa', function(req, res) {
    res.render('pages/enviodoa')
})

router.get('/enviocad', function(req, res) {
    res.render('pages/enviocad')
})



//login
let login = []
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

                for(let i = login.length - 1; i >= 0 ; i--){
                    login.splice(i, 2)
                }
                if(req.body.login_email, req.body.login_password){
                    login.push(req.body.login_email)
                    login.push(req.body.login_password)
                    console.log('Novo Login:', login)
                }
                res.render('pages/enviologin')
                
        }else{
            res.render("pages/login", {
                listaErros: listaErros, 
                valores:req.body
                })
            console.log(listaErros)
        }
    }
)


//signup
const signup = []

router.get("/", (req, res) => {
    res.render("pages/login", {listaErros: null, valores:{signup_name:"", signup_email:"", signup_password:""}})
})

router.post("/signup",
    body("signup_name").isLength({min:3}).withMessage("Nome inválido"),
    body("signup_email").isEmail().withMessage("Email inválido"),
    body("signup_password").isLength({min:6}).withMessage("Senha inválida"),
    
    (req, res) => {
        const listaErros = validationResult(req)

        if(listaErros.isEmpty()) {

            for(let i = signup.length - 1; i >= 0 ; i--){
                signup.splice(i, 3)
            }
            if(req.body.signup_name, req.body.signup_email, req.body.signup_password){
                signup.push(req.body.signup_name)
                signup.push(req.body.signup_email)
                signup.push(req.body.signup_password)
                console.log('Novo Cadastro:', signup)
            }

            res.render('pages/enviocad')

        }else{
            res.render("pages/login", {
                listaErros: listaErros,
                valores:req.body
            })
            console.log(listaErros)
        }
    }
)


// donations
const doacao = []

router.get("/", (req, res) => {
    res.render("pages/doacao", {listaErros: null, valores:{valorSelecionado:'', valorDigitado:''}})
})

router.post("/select", 
    body("valorSelecionado").notEmpty().withMessage("Selecione ou escreva um valor!"),

    (req, res) => {
        const listaErros = validationResult(req)

        if (listaErros.isEmpty()) {

                for(let i = doacao.length - 1; i >=0 ; i--){   
                        doacao.splice(i, 1)
                }

                if(req.body.valorSelecionado){
                    doacao.push(req.body.valorSelecionado)
                    console.log('Valor doado:', doacao)
                }else{
                    doacao.push(req.body.valorDigitado)
                    console.log('Valor doado:', doacao)
                }
                res.render('pages/enviodoa')

        } else {
            res.render("pages/doacao", {
                listaErros: listaErros,
                valores: req.body
            })
            console.log(listaErros)
        }
    }
)

// Contato
let contato = []

router.get('/', (req, res) => {
    res.render('pages/contato', {listaErros: null, valores:{name:"", email:"", message:"", telephone:""}})
})

router.post('/msg', 
    body("name").isLength({min:3}).withMessage("Nome inválido"),
    body("email").isEmail().withMessage("Email inválido"),
    body("message").isLength({min:3}).withMessage("Mensagem inválida"),
    body("telephone").isLength({min:11}).withMessage("Telefone tem 11 caracteres")
        .custom((value) => {
            if(validarTelefone(value)) {
                return true
            }
            throw new Error("Telefone inválido")
        }),

(req, res) => {
        const listaErros = validationResult(req)

        if (listaErros.isEmpty()) {
            for(let i = contato.length - 1; i >= 0 ; i--){
                contato.splice(i, 4)
            }
            if(req.body.name, req.body.email, req.body.mensagem, req.body.telephone){
                contato.push(req.body.name)
                contato.push(req.body.email)
                contato.push(req.body.telephone)
                contato.push(req.body.message)
                console.log('Nova Mensagem:', contato)
            }

            res.render('pages/enviocont')
            
        } else {
            res.render("pages/contato", {
                listaErros: listaErros,
                valores: req.body
            })
            console.log(listaErros)
        }
    })

module.exports = router;