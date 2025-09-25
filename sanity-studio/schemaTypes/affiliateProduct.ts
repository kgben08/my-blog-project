import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'affiliateProduct',
  title: 'Affiliate Product Card',
  type: 'object',
  fields: [
    defineField({name: 'productName', title: 'Product Name', type: 'string'}),
    defineField({name: 'productImage', title: 'Product Image', type: 'image'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'affiliateUrl', title: 'Affiliate URL', type: 'url'}),
    defineField({name: 'buttonText', title: 'Button Text', type: 'string', initialValue: '詳しく見る'}),
  ],
})