const express =require('express');
const app = express()

app.get('/',(request, response, next)=>{
    
    response.send("Hello word")

})

app.listen(3000,()=>{
    console.log('Executando na 3000')
})