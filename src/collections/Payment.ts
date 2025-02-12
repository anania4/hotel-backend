import { CollectionConfig, Endpoint, PayloadHandler } from 'payload'

export const Payment: CollectionConfig = {
  slug: 'payments',
  access: {
    read: () => true,
    create: () => true
  },
  fields: [
    {
      name: 'booking',
      type: 'relationship',
      relationTo: 'bookings',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: [
        { label: 'Credit Card', value: 'credit_card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Bank Transfer', value: 'bank_transfer' },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'transactionId',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
  ],
  endpoints: [
    {
      path: '/payment-initiate/:bookingId',
      method: 'post',
      handler: async (req) => {
        if (!req || !req.routeParams) {
          return Response.json({ message: 'Invalid request' });
        }
        const bookingId = req.routeParams.bookingId;

        if (!bookingId) {
          return Response.json({ message: 'Booking ID is required' });
        }

        const booking = await req.payload.findByID({
          collection: 'bookings',
          id: bookingId as string,
        });


        if (!booking) {
          return Response.json({ message: 'Booking not found' });
        }

        const room = await req.payload.findByID({
          collection: 'room',

          id: booking.room as string,
        })

        const gust = await req.payload.findByID({
          collection: 'guests',

          id: booking.guest as string,
        })

        const tx_ref = bookingId;


        const { price, email, name, phone } = {
          ...gust, ...room
        };

        const response = await fetch("https://api.chapa.co/v1/transaction/initialize", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.CHAPA_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "amount": ((price) * booking.roomNo!).toString(),
            "currency": "ETB",
            "email": email,
            "first_name": name,
            "last_name": name,
            "phone_number": phone,
            "tx_ref": tx_ref + "hggg",
            "callback_url": "http://localhost:4000/payment-verify",
            "return_url": new URL(`http://localhost:4000/paymentsuccess/${tx_ref}`).href,
            "customization": {
              "title": "Home Hotel",
              "description": "Booking Payment for Home Hotel",
            },
          })
        });

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
          return Response.json({
            message: data.message || 'Failed to initiate payment',
          });
        }

        return Response.json({
          ...data
        });
      },
    },
    /*
    {
      path: '/payment-verify',
      method: 'post',
      handler: async (req) => {
        return Response.json({
          message: `Hello`,
        });
      },
    },*/
  ],
}
