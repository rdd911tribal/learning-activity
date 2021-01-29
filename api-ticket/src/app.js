const express = require('express');
const dotenv = require('dotenv/config');

const app = express();

app.get('/health', (req, res) => {
    res.send({message: "api-ticket is up and running"})
});

app.get('/tickets', (req, res) => {
    res.send([
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
        { id: 12, name: "AMS1000012", assignee: 6},
    ]);
});

app.listen(process.env.PORT, console.log(`Server is up and running in port: ${process.env.PORT} ...`));