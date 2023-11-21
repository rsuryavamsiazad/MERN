var http=require('http');
 
http.createServer(function (req,res) {
    res.write(`hello surya world`);
    res.end();
}).listen(8080);