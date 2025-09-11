import type { Metadata } from "next";
import { Lato, Noto_Sans_JP } from "next/font/google";
import Script from "next/script"; // Import Script component
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Developing English Evolution",
  description: "30代〜40代の子育て世代へ向けた、親子で進化（Evolution）するための英語学習メディア。",
};

const GA_MEASUREMENT_ID = "G-B207WMWG8T"; // Your GA Measurement ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${lato.variable} ${notoSansJP.variable}`}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body className={`${lato.variable} ${notoSansJP.variable} bg-base-white text-dark-gray flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}