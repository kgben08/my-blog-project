import {defineType, defineArrayMember} from 'sanity'

/**
 * このファイルは、記事本文（Portable Text）のスキーマ定義です。
 * カスタムスタイル（デコレーター）やカスタムブロックを追加できます。
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // テキストのスタイル設定（見出しなど）
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      // 箇条書きの種類
      lists: [
        {title: 'Bullet', value: 'bullet'}, // 通常の箇条書き
        {title: 'Number', value: 'number'}, // 番号付きリスト
      ],
      // インラインの文字装飾設定（デコレーター）
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'}, // 太字
          {title: 'Emphasis', value: 'em'},   // 斜体
          {title: 'Underline', value: 'underline'}, // 下線
          {title: 'Strike', value: 'strike-through'}, // 取り消し線
          // --- ここからがカスタムデコレーター ---
          {
            title: 'Highlight',
            value: 'highlight',
            icon: () => '🌟', // 黄色マーカー
          },
          {
            title: 'Inline Code',
            value: 'code',
            icon: () => '</>', // コードスニペット
          },
        ],
        // リンクなどの注釈
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // 画像ブロック
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    // --- ここからがカスタムブロック要素 ---
    // AdSense広告ブロック（前回の回答より）
    defineArrayMember({
      name: 'adSense',
      title: 'AdSense Ad',
      type: 'adSense', // `schemas/adSense.ts`で定義
    }),
    defineArrayMember({
      name: 'callToActionBlock',
      title: 'Call to Action',
      type: 'callToActionBlock',
    }),
    defineArrayMember({
      name: 'affiliateBox',
      title: 'Affiliate Box',
      type: 'affiliateBox',
    }),
    defineArrayMember({
      name: 'adEmbed',
      title: 'Ad Embed',
      type: 'adEmbed',
    }),
    defineArrayMember({
      name: 'customHtmlEmbed',
      title: 'Custom HTML Embed',
      type: 'customHtmlEmbed',
    }),
  ],
})