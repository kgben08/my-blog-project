import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'affiliateLink',
  title: 'Affiliate Link',
  type: 'document',
  fields: [
    defineField({
      name: 'affiliateName',
      title: 'Affiliate Name',
      type: 'string',
      description: 'e.g., Amazon, Rakuten',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trackingUrl',
      title: 'Tracking URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayTitle',
      title: 'Display Title',
      type: 'string',
      description: 'The text to display for the link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'imageAsset',
      title: 'Image Asset',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rel',
      title: 'rel Attribute',
      type: 'string',
      options: {
        list: [
          {title: 'nofollow', value: 'nofollow'},
          {title: 'sponsored', value: 'sponsored'},
          {title: 'ugc', value: 'ugc'},
          {title: 'nofollow sponsored', value: 'nofollow sponsored'},
        ],
        layout: 'radio',
      },
      initialValue: 'sponsored',
    }),
  ],
  preview: {
    select: {
      title: 'displayTitle',
      subtitle: 'affiliateName',
      media: 'imageAsset',
    },
  },
})
