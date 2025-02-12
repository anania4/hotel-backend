import { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'guest',
      type: 'relationship',
      relationTo: 'room',
      required: true,
      maxDepth:3
    },
    {
      name: 'room',
      type: 'relationship',
      relationTo: 'room',
      required: true,
       maxDepth:3
    },
    {
      name: 'checkIn',
      type: 'date',
      required: true,
    },
    {
      name: 'checkOut',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (!data.relatedItem) {
          const createdRelatedItem = await req.payload.create({
            collection: 'guests',
            data: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
            },
          })

          data.guest = createdRelatedItem.id
          
        }

        return data
      },
    ],
  },
}
