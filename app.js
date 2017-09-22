const aplication = require('./config/server')

const server = aplication.listen(80, () => console.log('Servidor Online'))

const io = require('socket.io').listen(server)
aplication.set('io', io)
var apelido = ''

io.on('connection', function(socket) {
    console.log('usuario se conectou')

    socket.on('disconnect', function(data) {
        console.log('Usuario se desconectou')
    })

    socket.on('msgParaServidor', function(data) {
        //dialogos

        apelido = data.apelido
        socket.emit(
            'msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem }
        )
        socket.broadcast.emit(
                'msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem }
            )
            //participantes
        if (parseInt(data.atualizadando_participantes) == 0) {

            socket.emit(
                'participantesParaCliente', { apelido: data.apelido }
            )
            socket.broadcast.emit(
                'participantesParaCliente', { apelido: data.apelido }
            )
        }
    })
})