import type { CollectionConfig } from 'payload'

export const Room: CollectionConfig = {
  slug: 'room',
  access: {
    read: () => true,
    readVersions: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'facilities',
      type: 'relationship',
      relationTo: 'facilities',
      hasMany: true,
    },
    {
      name: 'size',
      type: 'number',
      required: true,
      validate: (size: any) => size > 0 || 'Size must be greater than 0',
    },
    {
      name: 'maxPerson',
      type: 'number',
      required: true,
      defaultValue: 1,
      validate: (maxPerson: any) => maxPerson > 0 || 'Max persons must be greater than 0',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      defaultValue: 100,
      validate: (price: any) => price >= 0 || 'Price must be a positive value',
    },

    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

/*
export const Room: CollectionConfig = {
  slug: 'room',
  access: {
    read: () => true,
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
*/
