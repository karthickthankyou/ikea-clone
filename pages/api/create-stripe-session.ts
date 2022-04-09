const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(
  req: { body: { items: any } },
  res: { json: (arg0: { id: any }) => void }
) {
  const { items } = req.body

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://ikea.iamkarthick.com'

  const transformedItems = items.map(
    (item: { image: any; name: any; price: number; description: any }) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          images: [item.image],
          name: item.name,
        },
        unit_amount: item.price,
      },
      description: item.description,
      quantity: 1,
    })
  )

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${redirectURL}/orders`,
    cancel_url: `${redirectURL}/cart`,
    metadata: {
      images: items[0].image,
    },
  })

  res.json({ id: session.id })
}

export default CreateStripeSession
