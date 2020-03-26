 // Adds support for GET requests to our webhook
 app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "EAADC3oKaWooBAHQ1P2ihdlqqShWtoCGO6mT4o7r3H61wtwvwelQSdYHG8bsOy7cEmfR21yefHDm0VCBHtZC23ZBCJlimB9TtewGeT5uTMueNZCc0bHi4OR6ZCfheitaWXAixjUrwMiHnIcjpVdiN1zS0V9EydHhpd7fZCkqrUJQZDZD"
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
        
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  });