const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taan - IT-BA-4102</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #1a0000 0%, #000000 100%);
            color: #ff0000;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            text-align: center;
            max-width: 600px;
            background: rgba(0, 0, 0, 0.8);
            padding: 50px;
            border-radius: 10px;
            border: 2px solid #ff0000;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
        }
        
        h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 0 0 10px #ff0000;
            letter-spacing: 2px;
        }
        
        .section {
            font-size: 1.5em;
            color: #cc0000;
            margin-bottom: 40px;
            letter-spacing: 1px;
        }
        
        .quote {
            font-size: 1.2em;
            font-style: italic;
            color: #ffffff;
            line-height: 1.6;
            padding: 20px;
            background: rgba(255, 0, 0, 0.1);
            border-left: 4px solid #ff0000;
            margin-top: 30px;
        }
        
        .quote::before {
            content: '"';
            font-size: 2em;
            color: #ff0000;
        }
        
        .quote::after {
            content: '"';
            font-size: 2em;
            color: #ff0000;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Rai Olric Taan</h1>
        <div class="section">IT-BA-4102</div>
        <div class="quote">
            Begin with what you hold.<br>
            Rise from where you stand.
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});