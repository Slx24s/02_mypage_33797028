var http = require("http");
const port = 8000;

const facts = [
  "Honey never spoils; archaeologists have tasted 3,000-year-old honey and lived to tell the tale.",
  "A single cloud can weigh over a million pounds."
];

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  });

  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Personal Corner</title>
  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .card {
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      max-width: 600px;
      padding: 2rem 3rem;
      text-align: center;
    }
    h1 {
      margin-top: 0;
      color: #2c3e50;
    }
    h2 {
      color: #34495e;
      margin-top: 1.5rem;
    }
    .fact {
      font-style: italic;
      color: #8e44ad;
      margin: 1.5rem 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to My Page</h1>
    <h2>About Me</h2>
    <p>Hello! I'm a student at Goldsmiths, tinkering with code and caffeine.</p>

    <h2>Random Fact</h2>
    <p class="fact">${randomFact}</p>

    <h2>My Interests</h2>
    <p>Programming, learning new technologies, and occasionally reading all night.</p>
  </div>
</body>
</html>`);
}).listen(port, function () {
  console.log(`Node server is running on port ${port}...`);
});