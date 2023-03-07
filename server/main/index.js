'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/message', (req, res) => {
    res.json({message: 'Hello from server!'})
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
