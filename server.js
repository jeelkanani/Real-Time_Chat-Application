const express=require('express');
const { Socket } = require('socket.io');
const app=express();
const PORT=process.env.PORT || 4000;

const http=require('http').createServer(app);



http.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})


//socket

// here also menstion server name so socket know which server works
const io = require('socket.io')(http);

io.on('connection',(Socket)=>{
    console.log('a user connected');
})


