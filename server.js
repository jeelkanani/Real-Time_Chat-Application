const express = require('express')
const app = express()


const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


//server only know the index file to inform the server about static file here we mention static files in middeleware
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// set up Socket 


//first required to import soket.io files and pass server as function so socket idetifier which server we have to connect.
const io = require('socket.io')(http)

//whenever any client or browers connected to the server then function will be called 
io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})