const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your-stripe-secret-key');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { line_items } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${req.headers.origin}?success=true`,
    cancel_url: `${req.headers.origin}?cancelled=true`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port 4242`));
