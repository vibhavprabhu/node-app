const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>ECS Demo</title></head>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 100px;">
        <h1>Hello from ECS Fargate 🚀</h1>
        <p>Deployed by Vibhav Prabhu</p>
        <p>Running on port ${PORT}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});