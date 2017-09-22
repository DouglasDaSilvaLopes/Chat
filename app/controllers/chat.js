module.exports.iniciaChat = function(aplication, req, res) {

    let dadosFormulario = req.body

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty()
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15)

    let erros = req.validationErrors()

    if (erros) {
        res.render('index', { validation: erros })
    }

    aplication.get('io').emit(
        'msgParaCliente', { apelido: dadosFormulario.apelido, mensagem: 'acabou de entrar no chat' }
    )

    res.render('chat', { dadosFormulario: dadosFormulario })
}