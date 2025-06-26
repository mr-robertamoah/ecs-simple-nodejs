const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="background-color: ${process.env.COLOR || '#ffffff'};">
        <h1>Welcome to ${process.env.APP_NAME || 'My App'}</h1>
        <p>Version: ${process.env.APP_VERSION || '1.0.0'}</p>
        <p>Environment: ${process.env.ENVIRONMENT || 'development'}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});