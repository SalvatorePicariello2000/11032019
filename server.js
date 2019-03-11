const express=require ('express')
const app=express();

app.get('/', function(req,res) {
res.sendfile(__dirname+ '/public/esercizio.html');
})

app.listen(process.env.PORT ||3000;

app.use(function(req,res){

res.write('Error 404');
res.end();
})