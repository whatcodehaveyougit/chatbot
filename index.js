'use strict';


// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.set('port', (process.env.PORT || 1337  ))
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
 
app.get('/', function(req, res){
    res.send("Hello I am a bot!")
})

app.get('./webhook/', function(req, res){
    if (req.query['hub.verify_token'] === "EAADC3oKaWooBAHQ1P2ihdlqqShWtoCGO6mT4o7r3H61wtwvwelQSdYHG8bsOy7cEmfR21yefHDm0VCBHtZC23ZBCJlimB9TtewGeT5uTMueNZCc0bHi4OR6ZCfheitaWXAixjUrwMiHnIcjpVdiN1zS0V9EydHhpd7fZCkqrUJQZDZD"){
        res.send(req.query['hub.challenge'])
    }
    res.send("Wrong Token"
    )
})

 
 
// //   Creates the endpoint for our webhook 
// app.post('/webhook', (req, res) => {  
 

//     let body = req.body;
  
//     // Checks this is an event from a page subscription
//     if (body.object === 'page') {
  
//       // Iterates over each entry - there may be multiple if batched
//       body.entry.forEach(function(entry) {
  
//         // Gets the message. entry.messaging is an array, but 
//         // will only ever contain one message, so we get index 0
//         let webhook_event = entry.messaging[0];
//         console.log(webhook_event);
//       });
  
//       // Returns a '200 OK' response to all requests
//       res.status(200).send('EVENT_RECEIVED');
//     } else {
//       // Returns a '404 Not Found' if event is not from a page subscription
//       res.sendStatus(404);
//     }
  
//   });