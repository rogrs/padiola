///----------------------------------------------------------------
/// Server Listen
/// 
///----------------------------------------------------------------


///modules npm
const express = require('express');
const App = express();

const bodyParser = require('body-parser');


///modules custom
const Cfg = require('../configuration/app-config');
const Error = require('../configuration/app-erro');


//Body parser and Middleware
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({
  extended: false
}));

var behaviour = require('../router/behaviour');
///import routes API
App.use('/api/v1/behaviour', behaviour);


///Bad Request API
App.use((req, res)=>{
    res.status(400);
    res.send(new Error(400, 'Bad Request'));
});

///Start server Node 
App.listen(Cfg.Server.port, (req, res)=>{
    console.log('open server');
})
