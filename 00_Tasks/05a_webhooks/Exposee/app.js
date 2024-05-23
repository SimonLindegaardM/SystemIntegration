import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

// import registerWebhook from './database.js';
// import unregisterWebhook from './database.js';
// import getAllWebhooks from './database.js';

// ES Module import
import { registerWebhook, unregisterWebhook, getAllWebhooks } from './database.js';



const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhooks/register', async (req, res) => {
  try {
    const { event_type, callback_url } = req.body;
    const result = await registerWebhook(event_type, callback_url);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/webhooks/unregister', async (req, res) => {
  try {
    const { event_type, callback_url } = req.body;
    const result = await unregisterWebhook(event_type, callback_url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/ping', async (req, res) => {
  try {
    const webhooks = await getAllWebhooks();
    webhooks.forEach(({ callback_url }) => {
      axios.post(callback_url, { data: 'Ping!' }).catch(console.error);
    });
    res.json({ message: 'Ping event sent to all registered webhooks.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Webhook system listening at http://localhost:${port}`);
});
