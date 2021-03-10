const express = require('express');
const dotenv = require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/health', (req, res) => {
    res.send({message: "api-team is up and running"})
});

app.get('/teams', (req, res) => {
    res.send([{ id: 1, name: "Amanpulo", designation: "Feature Development"}, { id: 2, name: "Management", designation: "Company Management"}]);
});

app.listen(process.env.PORT, console.log(`Server is up and running in port: ${process.env.PORT} ...`));