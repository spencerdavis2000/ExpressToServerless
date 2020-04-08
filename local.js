const app = require('./src/app');
const port = process.env.port || 8000;

// server
app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});