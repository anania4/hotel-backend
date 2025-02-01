import { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  fields: [
    {
      name: 'roomNumber',
      type: 'number',
      required: true,
      unique: true,
      label: 'Room Number',
    },
    {
      name: 'guestName',
      type: 'text',
      required: true,
    },
    {
      name: 'guestEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'room',
      type: 'relationship',
      relationTo: 'room',
      required: true,
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
}
