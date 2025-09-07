
import { Article, Author, Category } from '../types';

const author: Author = {
  name: 'Evo Mama',
  imageUrl: 'https://picsum.photos/seed/author/100/100',
};

const categories: Category[] = [
  { id: 'parent-tips', title: '親子英語のヒント' },
  { id: 'picture-books', title: 'おすすめ絵本' },
  { id: 'daily-phrases', title: '日常フレーズ' },
  { id: 'motivation', title: 'モチベーション' },
];

const articles: Article[] = [
  {
    slug: 'first-english-picture-book',
    title: '初めての英語絵本、親子で楽しむ選び方と読み聞かせのコツ',
    excerpt: '英語学習の第一歩は、楽しい絵本から。子どもの興味を引きつけ、自然と英語に親しむための絵本の選び方と、効果的な読み聞かせテクニックをご紹介します。',
    mainImage: 'https://picsum.photos/seed/article1/800/600',
    author,
    categories: [categories[0], categories[1]],
    publishedAt: '2024-05-20',
    body: [
      '英語学習のスタートは、難しく考える必要はありません。一番大切なのは、親子で「楽しい」と感じる経験を共有することです。そのための最適なツールが「英語絵本」です。カラフルなイラストとシンプルな言葉で、子どもの心を自然に英語の世界へと誘います。',
      'では、どんな絵本を選べば良いのでしょうか？まず第一に、お子さんが興味を持つテーマであることが重要です。動物が好きなら動物の絵本、乗り物が好きなら乗り物の絵本を選びましょう。「好き」という気持ちが、英語への好奇心を育てます。次に、繰り返しが多く、リズミカルな文章の絵本もおすすめです。歌うように読める絵本は、子どもたちが自然にフレーズを覚える手助けになります。',
      '読み聞かせの際は、完璧な発音を気にする必要はありません。大切なのは、感情を込めて、楽しそうに読むことです。指でイラストを追いながら、「Look! A big red car!」のように、簡単な英語で語りかけるのも効果的です。親が楽しんでいる姿を見せることで、子どもにとって英語は「勉強」ではなく「楽しい遊び」になるのです。',
    ],
  },
  {
    slug: 'everyday-english-phrases',
    title: '「おはよう」から「おやすみ」まで。日常で使える親子英会話フレーズ集',
    excerpt: '特別な時間を作らなくても、毎日の生活の中で英語に触れる機会はたくさんあります。朝起きてから夜寝るまで、様々なシーンで使える簡単な英語フレーズをまとめました。',
    mainImage: 'https://picsum.photos/seed/article2/800/600',
    author,
    categories: [categories[0], categories[2]],
    publishedAt: '2024-05-18',
    body: [
      '「英語を話せるようになってほしいけど、英会話教室に通わせるのはまだ早いかも…」そう考えているなら、まずは家庭での語りかけから始めてみませんか？日常生活の中に英語を少し取り入れるだけで、子どもにとって英語は身近な存在になります。',
      '朝起きたら "Good morning, sunshine!". 着替えるときには "Let\'s put on your shirt.". 食事の時間は "Are you hungry? It looks delicious!". そして、夜寝る前には "Good night, sleep tight.". このように、決まった場面で決まったフレーズを繰り返し使うことで、子どもは自然と意味を理解し、覚えていきます。',
      'ここでのポイントは、完璧を目指さないこと。まずは親自身が楽しんで使うことが大切です。今日から一つでも、お気に入りのフレーズを見つけて試してみてください。',
    ],
  },
  {
    slug: 'keep-motivation-high',
    title: '子どもの英語学習、どうやってモチベーションを維持する？',
    excerpt: '英語学習を継続する上で、一番の課題は「モチベーションの維持」です。子どものやる気を引き出し、長く楽しく続けるためのアイデアをご紹介します。',
    mainImage: 'https://picsum.photos/seed/article3/800/600',
    author,
    categories: [categories[0], categories[3]],
    publishedAt: '2024-05-15',
    body: [
      '子どもの興味は移ろいやすいもの。昨日まで楽しんでいた英語の歌に、今日は見向きもしない、なんてこともあります。そんな時、無理強いするのは逆効果です。大切なのは、英語学習を「楽しいイベント」に変える工夫です。',
      '例えば、英語の歌に合わせて一緒にダンスをしたり、絵本の内容を簡単な劇にして演じてみたり。英語を使ったゲームもおすすめです。身の回りにあるものを指して "What color is it?" とクイズを出すだけでも、立派な英語アクティビティになります。',
      'また、小さな「できた！」をたくさん褒めてあげることも忘れないでください。「今の発音、すごく良かったよ！」「単語を一つ覚えられたね、すごい！」といったポジティブな声かけが、子どもの自信と次への意欲に繋がります。焦らず、子どものペースに合わせて、楽しみながら進めていきましょう。',
    ],
  },
  {
    slug: 'benefits-of-bilingual-education',
    title: 'バイリンガル教育がもたらす、英語力以外の驚くべき効果とは？',
    excerpt: '早期英語教育のメリットは、単に英語が話せるようになるだけではありません。子どもの認知能力や社会性の発達に与える、様々なプラスの効果について解説します。',
    mainImage: 'https://picsum.photos/seed/article4/800/600',
    author,
    categories: [categories[3]],
    publishedAt: '2024-05-12',
    body: [
      '多くの研究で、バイリンガルやマルチリンガルの人々は、モノリンガルの人々と比べて特定の認知能力に優れていることが示されています。例えば、2つの言語システムを常に脳内で切り替えているため、集中力を維持したり、不要な情報を無視したり、タスクを切り替えたりする「実行機能」が高まる傾向にあります。',
      'また、異なる言語を学ぶことは、異なる文化や価値観に触れることでもあります。これにより、多様性を受け入れる柔軟な思考や、他者の視点を理解しようとする共感力も育まれます。英語力というスキルだけでなく、これからのグローバル社会を生き抜くために不可欠な、認知的な柔軟性や社会性を育てることができるのです。',
    ],
  },
];

// Simulate API call latency
const simulateFetch = <T,>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
};

export const getArticles = (): Promise<Article[]> => {
  return simulateFetch(articles);
};

export const getArticleBySlug = (slug: string): Promise<Article | undefined> => {
  const article = articles.find(a => a.slug === slug);
  return simulateFetch(article);
};

export const getCategories = (): Promise<Category[]> => {
  return simulateFetch(categories);
};

export const getAuthor = (): Promise<Author> => {
    return simulateFetch(author);
}
