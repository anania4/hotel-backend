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
      name: 'totalRooms',
      type: 'number',
      required: true,
      label: 'Total Rooms',
    },
  ],
}
