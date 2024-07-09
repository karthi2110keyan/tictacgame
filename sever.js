const http = require("http")
const path =require("path")
const port = 3000;



const sever = http.createServer((req,res)=>{
    if(res.url ===  "/"){

        
      res.end(path.join(__dirname,"index.html"))
    }
    
})

sever.listen(port)
console.log(`sever is listening to port: ${port}...`)