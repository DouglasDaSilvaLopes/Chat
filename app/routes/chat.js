module.exports = function(aplication) {
    aplication.post('/chat', (req, res) => {
        aplication.app.controllers.chat.iniciaChat(aplication, req, res)
    })

    aplication.get('/chat', (req, res) => {
        aplication.app.controllers.chat.iniciaChat(aplication, req, res)
    })
}