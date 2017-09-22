        const socket = io("http://localhost")

        $('#enviar_mensagem').click(function() {
            socket.emit(
                'msgParaServidor', {
                    apelido: $('#apelido').val(),
                    mensagem: $('#mensagem').val(),
                    atualizadando_participantes: $('#atualizadando_participantes').val()
                }
            )
            $('#mensagem').val('')
            $('#atualizadando_participantes').val(1)
        })

        socket.on('msgParaCliente', function(data) {
            let html = "";
            html += "<div class='dialogo'>"
            html += "<h4>" + data.apelido + "</h4>"
            html += "<p>" + data.mensagem + "</p>"
            html += "</div>"

            $('#dialogos').append(html)

            window.scrollTo(0, document.body.scrollHeight)
        })

        socket.on('participantesParaCliente', function(data) {
            let html = "";

            html += "<span class='participante'>"
            html += "<img src='images/ico_usuario.png'>"
            html += data.apelido
            html += "</span>"

            $('#pessoas').append(html)
        })