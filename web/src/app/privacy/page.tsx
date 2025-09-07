const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base-white shadow-lg rounded-lg animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-bold font-lato text-dark-gray text-center mb-4">プライバシーポリシー / お問い合わせ</h1>
      <div className="w-24 h-1 bg-seafoam-green mx-auto mb-8"></div>
      
      <div className="prose max-w-none text-dark-gray/90 leading-[1.8] font-noto-sans-jp">
        <h2 className="font-lato text-seafoam-green">個人情報保護方針</h2>
        <p>
          「Developing English Evolution」（以下、「当サイト」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
        </p>

        <h3 className="font-lato text-dark-gray">個人情報の管理</h3>
        <p>
          当サイトは、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
        </p>

        <h3 className="font-lato text-dark-gray">個人情報の利用目的</h3>
        <p>
          本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
        </p>
        
        <h2 className="font-lato text-seafoam-green mt-12">広告について</h2>
        <p>
          当サイトでは、第三者配信の広告サービス（Googleアドセンス、Amazonアソシエイトなど）を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、<a href="#" className="text-seafoam-green hover:underline">こちら</a>をクリックしてください。
        </p>
        
        <h2 className="font-lato text-seafoam-green mt-12">お問い合わせ</h2>
        <p>
          当サイトに関するお問い合わせは、以下のメールアドレスまでお願いいたします。
          <br />
          <a href="mailto:contact@example.com" className="text-seafoam-green hover:underline">contact@example.com</a>
        </p>

      </div>
    </div>
  );
};

export default PrivacyPage;
