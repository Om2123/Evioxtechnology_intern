// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NLGBpSHVXcG68q7HpgnjfKsJKfjsQmwx9ZMJF82DN9Arf7cmgtxRFGLdZUpIOQNICqYlTd0M8RK5vo7fqx4A49H00dB7tr6sU');
const express = require('express');
const cors = require('cors');
const pkey = "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";
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
        quantity: 2,
        price_data: {
          currency: 'inr',
          unit_amount: 34 * 100,
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

app.post("/single-product-checkout" , async(req,res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            quantity: 1,
            price_data: {
              currency: 'inr',
              unit_amount: req.body.product.price.integerValue  * 100,
              product_data: {
                name: req.body.product.title.stringValue,
                description: req.body.product.title.stringValue,
                images: [req.body.product.image.stringValue],
              },
            },
    
          }],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/Amazon-Clone/product/${req.body.id}`,
      });
    res.json({ sessionUrl: session.url });
})

app.post("/single-product-checkout-withoutId" , async(req,res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            quantity: 1,
            price_data: {
              currency: 'inr',
              unit_amount: req.body.product.price.integerValue  * 100,
              product_data: {
                name: req.body.product.title.stringValue,
                description: req.body.product.title.stringValue,
                images: [req.body.product.image.stringValue],
              },
            },
    
          }],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/Amazon-Clone/`,
      });
    res.json({ sessionUrl: session.url });
})
 

app.listen(4242, () => console.log('Running on port 4242'));