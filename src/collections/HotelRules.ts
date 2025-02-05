import type { CollectionConfig } from 'payload'

export const HotelRules: CollectionConfig = {
  slug: 'hotel-rules',
  labels: {
    singular: 'Hotel Rule',
    plural: 'Hotel Rules',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'rule',
      type: 'text',
      required: true,
      label: 'Rule',
    },
  ],
}
