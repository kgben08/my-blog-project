import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customHtmlEmbed',
  title: 'Custom HTML Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'htmlCode',
      title: 'HTML Code',
      type: 'text',
      description: 'Be careful with the code you embed, as it can affect the layout and security of your site.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Custom HTML Embed'}
    },
  },
})
