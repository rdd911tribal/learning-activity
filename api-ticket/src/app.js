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
    res.send({message: "api-ticket is up and running"})
});

const data = [
    { id: 1, name: "AMS100001", assignee: 1},
    { id: 2, name: "AMS100002", assignee: 2},
    { id: 3, name: "AMS100003", assignee: 3},
    { id: 4, name: "AMS100004", assignee: 4},
    { id: 5, name: "AMS100005", assignee: 5},
    { id: 6, name: "AMS100006", assignee: 6},
    { id: 7, name: "AMS100007", assignee: 1},
    { id: 8, name: "AMS100008", assignee: 2},
    { id: 9, name: "AMS100009", assignee: 3},
    { id: 10, name: "AMS1000010", assignee: 4},
    { id: 11, name: "AMS1000011", assignee: 5},
    { id: 12, name: "AMS1000012", assignee: 6}
];

app.get('/tickets', (req, res) => {
    res.send(data);
});

app.get('/tickets/:personId', (req, res) => {
    const personId = req.params.personId;
    const filteredData = data.filter((item) => item.assignee === parseInt(personId));
    res.send(filteredData);
})

app.listen(process.env.PORT, console.log(`Server is up and running in port: ${process.env.PORT} ...`));