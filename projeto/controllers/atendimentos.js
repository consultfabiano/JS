module.exports = app => {
    app.get('/atendimentos', (req, res) => 
    res.send('You are on the service route! GET'))

    app.post('/atendimentos', (req, res) => {
        console.log('Service sent')
          console.log(req.body)
        res.send('Post service!')
    })
}
