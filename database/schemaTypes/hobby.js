import { defineField, defineType } from 'sanity'

export const HobbyType = defineType({
  name: 'hobby',
  type: 'document',
  title: 'Hobby',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Hobby Name',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
    }),
    defineField({
      name: 'attachments',
      type: 'array',
      title: 'Attachments',
      of: [
        { type: 'image', title: 'Image File' },
        { type: 'file', title: 'Document or File' },
      ]
    }),
    defineField({
      name: 'priority',
      type: 'number',
      title: 'Priority',
      initialValue: 0,
  }),
  ],
})
