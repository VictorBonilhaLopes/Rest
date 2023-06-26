import express from 'express'

const app = express();

app.use(express.json())

const filmes = [
    {id:1, 'titulo':'Harry Poter'},
    {id:2, 'titulo':'Vingadores'},
    {id:3, 'titulo':'Jorrada nas Estrelas'}
]

const series = [
    {id:4, 'titulo':'Harry Poter Series'},
    {id:5, 'titulo':'Mandalorian'},
    {id:6, 'titulo':'Greys'}
]

app.get('/', (req, res) =>{
    res.status(200).send("IteFlix Cleber")
})

app.get('/filmes', (req, res) =>{
    res.status(200).json(filmes)
})

app.get('/filmes/:id', (req, res) =>{
    let index = buscarFilmes(req.params.id)
    res.json(filmes[index])
})

app.get('/series', (req, res) =>{
    res.status(200).json(series)
})

app.get('/series/:id', (req, res) =>{
    let index = buscarSeries(req.params.id)
    res.json(series[index])
})

app.post('/filmes', (req, res)=>{
    filmes.push(req.body)
    res.status(201).send("Filme cadastrado")
})

app.post('/series', (req, res)=>{
    series.push(req.body)
    res.status(201).send("Serie cadastrada")
})

app.put('/filmes/:id', (req, res)=>{
    let index = buscarFilmes(req.params.id)
    filmes[index].titulo = req.body.titulo
    res.json(filmes)
})

app.put('/series/:id', (req, res)=>{
    let index = buscarSeries(req.params.id)
    series[index].titulo = req.body.titulo
    res.json(series)
})

app.delete('/filmes/:id', (req, res)=>{
    let {id} = req.params;
    let index = buscarFilmes(id)
    filmes.splice(index, 1)
    res.send(`Filme ${id} removido`)
})

app.delete('/series/:id', (req, res)=>{
    let {id} = req.params;
    let index = buscarSeries(id)
    series.splice(index, 1)
    res.send(`Serie ${id} removida`)
})

function buscarFilmes(id){
    return filmes.findIndex(filmes => filmes.id == id)
}

function buscarSeries(id){
    return series.findIndex(series => series.id == id)
}

export default app