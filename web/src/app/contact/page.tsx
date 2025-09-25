import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-bold font-lato text-dark-gray mb-6 text-center">
        お問い合わせ
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-dark-gray/90 leading-[1.8] font-noto-sans-jp">
          お問い合わせいただきありがとうございます。
          <br />
          <br />
          現在、お問い合わせフォームを準備中です。お手数ですが、以下のメールアドレスまでご連絡ください。
        </p>
        <div className="mt-6 text-center">
          <a 
            href="mailto:contact@example.com" 
            className="text-seafoam-green text-lg font-semibold hover:underline"
          >
            contact@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;