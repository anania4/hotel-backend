import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Price per Night',
    },

    {
      name: 'size',
      type: 'number',
      label: 'Room Size (sq ft)',
    },
    {
      name: 'totalRooms',
      type: 'number',
      required: true,
      label: 'Total Rooms',
    },
  ],
}
