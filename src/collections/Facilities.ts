import type { CollectionConfig } from 'payload';

export const Facilities: CollectionConfig = {
  slug: 'facilities',
  labels: {
    singular: 'Facility',
    plural: 'Facilities',
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
      label: 'Facility Name',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Facility Description',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Facility Icon',
    },
  ],
};
