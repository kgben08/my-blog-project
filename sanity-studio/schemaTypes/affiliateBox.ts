import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'affiliateBox',
  title: 'Affiliate Box',
  type: 'object',
  fields: [
    defineField({
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'reference',
      to: [{type: 'affiliateLink'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'layout',
        title: 'Layout',
        type: 'string',
        options: {
            list: ['card', 'banner'],
            layout: 'radio'
        },
        initialValue: 'card'
    })
  ],
  preview: {
    select: {
      title: 'affiliateLink.displayTitle',
      subtitle: 'affiliateLink.affiliateName',
      media: 'affiliateLink.imageAsset',
    },
  },
})
