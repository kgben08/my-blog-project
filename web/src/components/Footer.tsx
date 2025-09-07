import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-base-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold font-lato text-seafoam-green">Developing English Evolution</h2>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Developing English Evolution. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 font-lato">
            <Link href="/about" className="hover:text-soft-coral transition-colors duration-300">運営者情報</Link>
            <Link href="/privacy" className="hover:text-soft-coral transition-colors duration-300">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
