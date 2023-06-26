import app from "./src/app.js"

const port = process.send.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor Online, em http://localhost:${port}`)
})