const express = require('express')
const expressValidator = require('express-validator')
const consign = require('consign')
const bodyParser = require('body-parser')

const aplication = express()

// setar as variáveis 'view engine' e 'views' do express 
aplication.set('view engine', 'ejs')
aplication.set('views', './app/views')

//configuração dos middleware
aplication.use(express.static('./app/public'))
aplication.use(bodyParser.urlencoded({ extended: true }))
aplication.use(expressValidator())

//efetuar autoload das rotas, dos models e dos controllers
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(aplication)

module.exports = aplication