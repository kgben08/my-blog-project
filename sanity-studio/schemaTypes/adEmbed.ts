import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'adEmbed',
  title: 'Ad Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'adCode',
      title: 'Ad Embed Code',
      type: 'text',
      description: 'Embed code for advertisements other than AdSense.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Ad Embed'}
    },
  },
})
