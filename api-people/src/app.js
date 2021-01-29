const express = require('express');
const dotenv = require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/health', (req, res) => {
    res.send({message: "api-people is up and running"})
});

const data = [
    { id: 1, name: "Allan Garrote", teamId: 1 },
    { id: 2, name: "Rommel David", teamId: 1 },
    { id: 3, name: "Jason Cabug", teamId: 1 },
    { id: 4, name: "Kevin Galacgac", teamId: 1 },
    { id: 5, name: "Nix Nicolas", teamId: 1 },
    { id: 6, name: "Ryan Aban", teamId: 1 },
    { id: 7, name: "Denis Base", teamId: 2 }
];

app.get('/people', (req, res) => {
    res.send(data);
});

app.get('/people/:teamId', (req, res) => {
    const teamId = req.params.teamId;
    const items = data.filter(function(item) {
        return item.teamId === parseInt(teamId);
    });
    res.send(items);
});

app.listen(process.env.PORT, console.log(`Server is up and running in port: ${process.env.PORT} ...`));