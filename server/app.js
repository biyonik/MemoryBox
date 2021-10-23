const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config();
require('./config/database.config');

const MemoryRouter = require('./routers/MemoryRouter');
app.use('/memory', MemoryRouter);

app.listen(port, async () => {
    console.log(`Uygulama, ${port} portundan dinleniyor...`);
});
