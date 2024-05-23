import express from 'express';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import cors from 'cors'

// Use 'http-server' to run the frontend

const app = express();
const stripe = Stripe('sk_test_51PJgavISs4ZcMxcAUhRKecjakq0efOaopZJOXeJyubnfdRNXWqxYCu8faGmAQ9A79LQsUgRvyiBKKhbjXO97VgiA00yUdDYStV'); // Private Key

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});