import { defineField, defineType } from 'sanity'

export const PictureType = defineType({
    name: 'picture',
    type: 'document',
    title: 'Picture',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Picture Name',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
        defineField({
            name: 'date',
            type: 'datetime',
            title: 'Date',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        }),
    ]
})
