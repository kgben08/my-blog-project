import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'adSense',
  title: 'AdSense Ad',
  type: 'object',
  fields: [
    defineField({
      name: 'dataAdClient',
      title: 'Data Ad Client (ca-pub-xxxxxxxx)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dataAdSlot',
      title: 'Data Ad Slot (xxxxxxxxxx)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
