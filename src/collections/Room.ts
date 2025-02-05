import type { CollectionConfig } from 'payload'

export const Room: CollectionConfig = {
  slug: 'room',
  access: {
    read: () => true,
    readVersions: () => true
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
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'metaKeywords', type: 'text' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Occupied', value: 'occupied' },
        { label: 'Maintenance', value: 'maintenance' },
      ],
      defaultValue: 'available',
      label: 'Room Status',
    },
  ],
}
