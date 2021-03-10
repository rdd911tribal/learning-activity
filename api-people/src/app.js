const express = require('express');
const dotenv = require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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

app.get('/people', authMiddleware, (req, res) => {
    // if(!isTokenValid(req.token)){
    //     console.log('invalid token');
    // }else{
    //     console.log('valid token');
    // }
    console.log(req.token);
    var asdf = isTokenValid(req.token);
    console.log('return: ', asdf);
    if(isTokenValid(req.token)){
        console.log('valid')
    }else{
        console.log('invalid')
    }
    res.json({
        data: data
    });
});

app.get('/people/:teamId', (req, res) => {
    const teamId = req.params.teamId;
    const items = data.filter(function(item) {
        return item.teamId === parseInt(teamId);
    });
    res.send(items);
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log({username, password});

    const user = {id: 7, username, roles: ['Admin', 'PayrollMaster']};
    const token = jwt.sign({user}, 'secret');
    res.json({
        token: token
    })
});

function authMiddleware(req, res, next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

function isTokenValid(token){
    var valid = true;
   jwt.verify(token, 'secret', function(err, data){
       console.log(err);
       console.log(err === null);
       if(err === null){
           console.log('returning true');
           valid = true;
       }else{
           console.log('returning false');
           valid = false;
       }
   });
   return valid;
}

app.listen(process.env.PORT, console.log(`Server is up and running in port: ${process.env.PORT} ...`));