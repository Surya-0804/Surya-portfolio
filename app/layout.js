import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import NavBar from '@/components/main/NavBar';
import Footer from '@/components/main/Footer';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ram Sai Sri Surya | Full Stack Developer & AI Enthusiast',
  description:
    'I am a Full Stack Developer skilled in Next.js, React, Node.js, and AI/ML. Check out my portfolio showcasing innovative projects, blogs, and expertise in modern web technologies.',
  keywords: [
    'Surya Portfolio',
    'Full Stack Developer',
    'Next.js SEO',
    'React.js Expert',
    'Node.js Backend',
    'AI in Web Development',
    'Machine Learning Engineer',
    'Cloud Developer',
    'Frontend Developer',
    'Backend Development',
  ],
  authors: [{ name: 'Ram Sai Sri Surya', url: 'https://your-portfolio.com' }],
  openGraph: {
    title: 'Ram Sai Sri Surya | Full Stack Developer & AI Enthusiast',
    description:
      'Full Stack Developer specializing in React, Next.js, and AI/ML. Explore my portfolio, blog, and projects in cutting-edge web development and cloud computing.',
    url: 'https://your-portfolio.com',
    type: 'website',
    images: [
      {
        url: 'https://your-portfolio.com/assets/og-image.jpg', // Ensure this is a real hosted image
        width: 1200,
        height: 630,
        alt: 'Ram Sai Sri Surya Portfolio - Full Stack Developer & AI Enthusiast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Surya_21_',
    creator: '@_Surya_21_',
    title: 'Ram Sai Sri Surya | Full Stack Developer & AI Enthusiast',
    description:
      'Explore my portfolio featuring expertise in Full Stack Development, Next.js, AI, and Machine Learning.',
    images: ['https://your-portfolio.com/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#0f172a', // Adds branding color to browser UI
  alternates: {
    canonical: 'https://your-portfolio.com',
  },
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
