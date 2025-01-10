import type { CollectionConfig } from 'payload'

export const Room: CollectionConfig = {
  slug: 'room',
  labels: {
    singular: 'Room',
    plural: 'Rooms',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'facilities',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Wifi', value: 'wifi' },
        { label: 'Coffee', value: 'coffee' },
        { label: 'Bath', value: 'bath' },
        { label: 'Parking Space', value: 'parking_space' },
        { label: 'Swimming Pool', value: 'swimming_pool' },
        { label: 'Breakfast', value: 'breakfast' },
        { label: 'GYM', value: 'gym' },
        { label: 'Drinks', value: 'drinks' },
      ],
    },
    {
      name: 'size',
      type: 'number',
    },
    {
      name: 'maxPerson',
      type: 'number',
      //value: 1, // Maximum number of occupants
    },
    {
      name: 'price',
      type: 'number',
      //value: 115, // Price in currency units
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media'
    },
  ],
}
