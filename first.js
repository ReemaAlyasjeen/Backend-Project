var http=require('http') 
var express=require('express')
var app =express()
const productsFilepath='product.json'
const products=require('./product.json')
var myfs= require("fs")
var body=require('body-parser')
var urlEncoded=body.urlencoded({extended:false})
app.use(express.static("public"))

var product4={"item4":{
    "name":"Classic Book",
    "id":4,
    "Description":"books are represent enduring literary works that have stood the test of time, transcending the boundaries of their respective eras to resonate with readers across generations. These timeless pieces of literature are characterized by their profound themes, enduring characters, and masterful storytelling"
}}
// Retrive the main page
app.get('/',function(req,res)
{
res.sendFile(__dirname+'/public/main.html')
})
// Retrive the form page 
app.get('/form',function(req,res)
{
res.sendFile(__dirname+'/public/form.html')
})
// Get all products
app.get('/products',function(req,res)
{
    res.json(products)

})
//Request a product 
app.post('/requestProduct',urlEncoded,(req,res)=>
 { 
    
    const name=req.body.name
    const id =req.body.id
    const desc=req.body.description
    res.json({message:"Product request submitted successfully"})

})
// Add a new product
app.post('/addProduct',urlEncoded,function(req,res)
 {  
  
    var newuser=product4['item4']
    newuser['name']=req.body.name
    newuser['id']=req.body.id
    newuser['des']=req.body.description
       res.send(newuser)
})

var server= app.listen(8888,function(){
    var host =server.address().address
    var post= server.address().port
    
})
console.log("server started")