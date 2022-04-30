 const http = require('http')
 
 const server = http.createServer((req,res)=>{
   if (req.url === '/') {
        res.end('hoooooooo')  
   }
   if (req.url === '/about') {
        res.end('welcome to about page')  
   }
   res.end(`
       <h1>oopss!</h1>
       
       `
   )
 
 })

 server.listen(5000)