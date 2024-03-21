import express from "express";
import bodyParser from 'body-parser';
import axios from 'axios';



const app = express();
app.use(bodyParser.json());

// Endpoint to receive webhook events
app.post('/webhook-listener', (req, res) => {
    console.log('Received webhook event:', req.body);
    res.send('Event received');
});

const webhookSystemUrlRegister = 'http://localhost:3000/webhooks/register'; // URL of my webhook system
const webhookSystemUrlUnregister = 'http://localhost:3000/webhooks/unregister'; // URL of my webhook system
const callbackUrl = 'http://localhost:8080/webhook-listener'; // URL of my integrator server

app.post('/register', async (req, res) => {
    const eventType = req.body.event_type; // Expect event_type to be passed in request body
  if (!eventType) {
    return res.status(400).send('Event type is required');
  }
  
  try {
    const response = await axios.post(webhookSystemUrlRegister, {
      event_type: eventType,
      callback_url: callbackUrl
    });
    console.log('Webhook registered successfully', response.data);
    res.status(201).send('Webhook registered successfully');
  } catch (error) {
    console.error('Error registering webhook', error.message);
    res.status(500).send('Error registering webhook');
  }
})

app.post('/unregister', async (req, res) => {
    const eventType = req.body.event_type; // Expect event_type to be passed in request body
  if (!eventType) {
    return res.status(400).send('Event type is required');
  }
  
  try {
    const response = await axios.post(webhookSystemUrlUnregister, {
      event_type: eventType,
      callback_url: callbackUrl
    });
    console.log('Webhook unregistered successfully', response.data);
    res.status(201).send('Webhook unregistered successfully');
  } catch (error) {
    console.error('Error unregistering webhook', error.message);
    res.status(500).send('Error unregistering webhook');
  }
})


app.listen(8080, () => {
    console.log(`The server: \x1b[36mhttp://localhost:8080`)
});