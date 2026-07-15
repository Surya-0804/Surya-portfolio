import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import NavBar from '@/components/main/NavBar';
import Footer from '@/components/main/Footer';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  themeColor: '#0f172a',
};

export const metadata = {
  title: 'Surya Abothula | AI/LLM Engineer & Full Stack Developer',
  description:
    'AI/LLM Engineer with 1+ year building production-grade NLP and ML systems. Deploying open-source LLMs on NVIDIA DGX, designing RAG pipelines, and optimizing semantic search. Full Stack Developer skilled in Next.js, React, FastAPI, and Python.',
  keywords: [
    'Surya Abothula',
    'AI Engineer',
    'LLM Engineer',
    'NLP Engineer',
    'RAG Pipelines',
    'LLM Deployment',
    'vLLM',
    'NVIDIA DGX',
    'Semantic Search',
    'Full Stack Developer',
    'Next.js',
    'React.js',
    'FastAPI',
    'Python',
    'Machine Learning Engineer',
    'Vector Database',
    'Qdrant',
  ],
  authors: [{ name: 'Surya Abothula', url: 'https://surya-portfolio-umber.vercel.app' }],
  openGraph: {
    title: 'Surya Abothula | AI/LLM Engineer & Full Stack Developer',
    description:
      'AI/LLM Engineer building production AI systems — LLM deployment, RAG pipelines, and semantic search at scale. Explore my portfolio, projects, and technical writing.',
    url: 'https://surya-portfolio-umber.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://surya-portfolio-umber.vercel.app/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Surya Abothula — AI/LLM Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Surya_21_',
    creator: '@_Surya_21_',
    title: 'Surya Abothula | AI/LLM Engineer & Full Stack Developer',
    description:
      'Explore my portfolio — production LLM deployment, RAG pipelines, semantic search, and full-stack web applications.',
    images: ['https://surya-portfolio-umber.vercel.app/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://surya-portfolio-umber.vercel.app',
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
