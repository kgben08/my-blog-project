import Image from 'next/image';
import { getAuthor } from '@/services/sanityService';

const AboutPage = async () => {
    const author = await getAuthor();

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base-white shadow-lg rounded-lg animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold font-lato text-dark-gray text-center mb-4">About Me - ブログ運営者プロフィール</h1>
            <div className="w-24 h-1 bg-seafoam-green mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {author && (
                    <Image src={author.imageUrl} alt={author.name} width={160} height={160} className="w-40 h-40 rounded-full shadow-md flex-shrink-0" />
                )}
                <div className="text-center md:text-left flex-grow">
                    <h2 className="text-2xl font-bold font-lato text-seafoam-green">{author?.name}</h2>
                    <p className="text-dark-gray/80 mt-4 leading-[1.8]">
                        英語学習と教育への情熱から生まれた実体験ブログ
                    </p>
                </div>
            </div>

            <div className="prose prose-lg max-w-none text-dark-gray/90 leading-[1.8] font-noto-sans-jp">
                <p>
                    はじめまして！このブログを運営している{author?.name}です。
                    <br />
                    私は英語学習者として、そして英語教育者として、多角的な視点から英語に関わってきました。自身の学習経験と指導経験を通じて得た知見を、同じように英語学習に取り組む皆様、そして子供の英語教育を考える保護者の方々にお届けしたいと思い、このブログを立ち上げました。
                </p>

                <h3 className="text-2xl font-bold font-lato text-dark-gray mt-8 mb-4">海外留学経験 - オーストラリアで培った実践的な英語力</h3>
                <p><strong>シドニー・ブリスベンでの語学留学体験</strong></p>
                <p>
                    オーストラリアのシドニーとブリスベンにて語学留学を経験。現地の語学学校では、世界各国から集まった学習者と共に切磋琢磨し、Pre-intermediateで入学し、最上級のAdvancedクラスで卒業という成果を収めました。
                    この留学経験では、教科書では学べない生きた英語表現、多様な文化背景を持つ人々とのコミュニケーション、そして日本人が陥りがちな英語学習の落とし穴について、身をもって学ぶことができました。特に、ネイティブスピーカーとの日常的な交流を通じて、自然で実践的な英語力を身につけることができたのは、現在の教育活動における大きな財産となっています。
                </p>

                <h3 className="text-2xl font-bold font-lato text-dark-gray mt-8 mb-4">国際的な英語資格への挑戦</h3>
                <p><strong>ケンブリッジ英語検定取得 & IELTSクラス受講</strong></p>
                <p>
                    世界的に認知度の高いケンブリッジ英語検定に合格し、さらなるスキルアップのためにIELTSクラスも受講。これらの資格試験への挑戦を通じて、4技能（リスニング、リーディング、スピーキング、ライティング）をバランス良く向上させる重要性を実感しました。
                    特に、これらの試験対策で学んだアカデミックな英語力は、後の教員免許取得や指導活動において、理論的な裏付けとして大いに役立っています。
                </p>

                <h3 className="text-2xl font-bold font-lato text-dark-gray mt-8 mb-4">教育への転身 - 働きながらの挑戦</h3>
                <p><strong>最短2年間での高校英語教員免許取得</strong></p>
                <p>
                    留学から帰国後、英語教育に対する情熱が高まり、働きながら通信制大学に通い、最短2年間で高校英語教員免許を取得。
                    仕事と学業の両立は決して楽ではありませんでしたが、この経験により「限られた時間を有効活用する学習法」「継続するためのモチベーション管理」など、多忙な大人の学習者が直面する課題への理解を深めることができました。この実体験は、現在ブログでお伝えしている「効率的な学習法」の根幹となっています。
                </p>
                <p><strong>現場での指導経験</strong></p>
                <p>
                    現在は本業の傍ら、中学英語の塾講師として、日々生徒たちの英語学習をサポートしています。一人ひとりの学習スタイルや理解度に合わせた指導を心がけ、「英語が苦手」から「英語わかってきたかも」と意識を変える瞬間に立ち会えることや先生のおかげで英語が伸びたという声が、何よりのやりがいです。
                    指導を通じて感じるのは、英語学習における「正しい順序」「適切な教材選び」「継続のコツ」の重要性です。これらの現場で得た知見を、このブログを通じて多くの方に共有したいと考えています。
                </p>

                <h3 className="text-2xl font-bold font-lato text-dark-gray mt-8 mb-4">このブログで提供する価値</h3>
                <p><strong>実体験に基づいた信頼できる情報</strong></p>
                <ul className="list-disc list-inside">
                    <li>学習者目線: 自身の留学経験や資格取得体験から得た「実際に効果があった学習法」</li>
                    <li>教育者目線: 指導現場で確認できた「生徒が伸びる指導法」「つまずきやすいポイント」</li>
                    <li>保護者目線: 子供の英語教育における「年齢に応じた学習法」「教材・サービス選び」</li>
                </ul>

                <h3 className="text-2xl font-bold font-lato text-dark-gray mt-8 mb-4">お届けするコンテンツ</h3>
                <p>＼役立つ英語情報やコンテンツを配信／</p>
                <ul className="list-disc list-inside">
                    <li>オンライン英会話サービスの詳細比較・レビュー</li>
                    <li>年齢・レベル別の効果的な学習法</li>
                    <li>英語資格試験対策のポイント</li>
                    <li>留学準備・海外生活のリアルな情報</li>
                    <li>親子で取り組む英語学習のコツ</li>
                    <li>時短・効率重視の学習テクニック</li>
                </ul>
                
                <hr className="my-8" />

                <p>
                    英語学習は一人ひとり異なる道のりです。私の経験が、あなたやお子様の英語学習の一助となれば幸いです。ご質問やリクエストがございましたら、お気軽にコメントやお問い合わせからご連絡ください。
                    一緒に楽しく、効果的な英語学習を続けていきましょう！
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
