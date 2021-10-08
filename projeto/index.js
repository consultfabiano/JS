const customExpress = require("./config/customExpress")
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } 
})

const app = customExpress()

app.listen(3000, ()=> console.log('listening...'))

