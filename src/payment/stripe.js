// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NLGBpSHVXcG68q7HpgnjfKsJKfjsQmwx9ZMJF82DN9Arf7cmgtxRFGLdZUpIOQNICqYlTd0M8RK5vo7fqx4A49H00dB7tr6sU');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.static('public'));
app.use(express.json()); // Parse JSON data in the request body

const YOUR_DOMAIN = 'http://localhost:3000';

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST', // Add any other HTTP methods you need
  }));

app.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    line_items: [{
        quantity: req.body.basket.length,
        price_data: {
          currency: 'inr',
          unit_amount: req.body.sumOfBasket * 100,
          product_data: {
            name: 'Your products from the cart',
            description: 'To see the details please go back to cart',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJZ_bb_yXqXndz3km0FsgGzFJJtF1swTXxmPJK98WXS_NmD3D6FADe4PZyuY1CJzY7f8&usqp=CAU'],
          },
        },

      }],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/Amazon-Clone/checkout`,
  });

res.json({ sessionUrl: session.url });
});
 

app.listen(4242, () => console.log('Running on port 4242'));