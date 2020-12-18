const express = require('express');
const mainRouter = require('./routes/main-route');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
