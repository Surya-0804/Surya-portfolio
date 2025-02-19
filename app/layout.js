import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import NavBar from '@/components/main/NavBar';
import Footer from '@/components/main/Footer';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Surya Portfolio',
  description: 'This is my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Toaster richColors />

        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
