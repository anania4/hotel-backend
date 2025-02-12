import { CollectionConfig, Endpoint, PayloadHandler } from 'payload'

export const Payment: CollectionConfig = {
  slug: 'payments',
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
      path: '/initiate-payment',
      method: 'post',
      handler: async (req) => {

        //return Response.json({ error: 'not found' }, { status: 4 })

        return Response.json({
          message: `Hello`,
        })
      },
    },
    {
      path: '/payment-verify',
      method: 'post',
      handler: async (req) => {
        //return Response.json({ error: 'not found' }, { status: 4 })
        return Response.json({
          message: `Hello`,
        })
      },
    },
  ],
}
