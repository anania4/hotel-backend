import { CollectionConfig } from 'payload'

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
      path: '/create-payment',
      method: 'post',
      handler: async (req, res) => {
        try {
          const { amount, userId } = req.body;
          
          // Payment processing logic (e.g., integrating Stripe, PayPal, etc.)
          const transactionId = `txn_${Date.now()}`;

          const newPayment = await req.payload.create({
            collection: 'payments',
            data: { transactionId, amount, status: 'pending' },
          });

          return res.status(200).json({ success: true, payment: newPayment });
        } catch (error) {
          return res.status(500).json({ success: false, error: error.message });
        }
      },
    },
  ],
}
