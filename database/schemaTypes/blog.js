import { defineField, defineType } from 'sanity'

export const BlogPostType = defineType({
    name: 'blogPost',
    type: 'document',
    title: 'Blog Post',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Blog Title',
        }),
        defineField({
            name: 'publishDate',
            type: 'datetime',
            title: 'Publish Date',
        }),
        defineField({
            name: 'content',
            type: 'string',
            title: 'Content',
        }),
        defineField({
            name: 'abstract',
            type: 'text',
            title: 'Abstract',
        }),
        defineField({
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'seoTitle',
            type: 'string',
            title: 'SEO Title',
        }),
        defineField({
            name: 'seoDescription',
            type: 'text',
            title: 'SEO Description',
        }),
        defineField({
            name: 'priority',
            type: 'number',
            title: 'Priority',
            initialValue: 0,
        }),
    ],
})
