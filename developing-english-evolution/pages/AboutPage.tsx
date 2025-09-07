
import React, { useState, useEffect } from 'react';
import { getAuthor } from '../services/sanityService';
import { Author } from '../types';

const AboutPage: React.FC = () => {
    const [author, setAuthor] = useState<Author | null>(null);

    useEffect(() => {
        getAuthor().then(setAuthor);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base-white shadow-lg rounded-lg animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold font-lato text-dark-gray text-center mb-4">運営者情報 (About)</h1>
            <div className="w-24 h-1 bg-seafoam-green mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {author && (
                    <img src={author.imageUrl} alt={author.name} className="w-40 h-40 rounded-full shadow-md flex-shrink-0" />
                )}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold font-lato text-seafoam-green">{author?.name}</h2>
                    <p className="text-dark-gray/80 mt-4 leading-[1.8]">
                        はじめまして！「Developing English Evolution」を運営しているEvo Mamaです。
                        <br /><br />
                        30代、一児の母。子育てに奮闘する中で、「子どもと一緒に自分も成長したい」という思いから、親子での英語学習を始めました。このブログでは、私自身の試行錯誤の経験を元に、30代〜40代の子育て世代のパパ・ママに向けて、信頼できるリアルな英語学習情報を発信しています。
                        <br /><br />
                        机に向かう勉強だけでなく、日々の暮らしの中で楽しく英語に触れるヒントや、親自身の学び直しに役立つ情報、そして何より親子で一緒に「できた！」を分かCHIAU喜びを共有できるようなコンテンツを目指しています。この場所が、あなたとあなたのお子さんにとって、新しい世界の扉を開くきっかけになれば幸いです。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
