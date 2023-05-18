const express=require('express');
const app=express();
const PORT=process.env.PORT || 4000;

const http=require('http').createServer(app);



http.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})


