var http = require("http");  
const port = 8000;  

http.createServer(function(req, res) {  
    res.writeHead(200, { "Content-Type": "text/html" }); 
    res.end(`<!DOCTYPE html>
<html>
<head>
    <title>My Personal Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <h2>About Me</h2>
    <p>Hello! I'm a student at goldsmiths</p>
    <p>I have created a website for nuts..</p>
    <h2>My Interests</h2>
    <p>I enjoy programming, learning new technologies, and building web applications.</p>
</body>
</html>`); 
    }).listen(port, function() {  
        console.log(`Node server is running on port ${port}...`);  
});