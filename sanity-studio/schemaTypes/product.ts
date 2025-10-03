import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: '商品・サービス',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '商品名',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '商品画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'affiliateLink',
      title: 'アフィリエイトリンク',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: '評価（5段階）',
      type: 'number',
      options: {
        list: [
          {title: '★☆☆☆☆', value: 1},
          {title: '★★☆☆☆', value: 2},
          {title: '★★★☆☆', value: 3},
          {title: '★★★★☆', value: 4},
          {title: '★★★★★', value: 5},
        ],
        layout: 'radio',
      }
    }),
    defineField({
      name: 'summary',
      title: '概要・キャッチコピー',
      type: 'text',
    }),
    defineField({
      name: 'merits',
      title: 'メリット',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'demerits',
      title: 'デメリット',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
