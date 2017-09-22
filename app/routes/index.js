module.exports = function(aplication) {
    aplication.get('/', (req, res) => {
        aplication.app.controllers.index.home(aplication, req, res)
    })
}