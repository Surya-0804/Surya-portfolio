import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import NavBar from '@/components/main/NavBar';
import Footer from '@/components/main/Footer';
import LoadingScreen from '@/components/main/LoadingScreen';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  themeColor: '#0f172a',
};

export const metadata = {
  title: 'Ram Sai Sri Surya Abothula | AI/LLM Engineer',
  description:
    'AI/LLM Engineer specializing in building production-grade NLP and ML systems. Expert in LLM deployment on NVIDIA DGX, RAG pipelines, and semantic search. Experienced in backend & full-stack engineering.',
  keywords: [
    'Ram Sai Sri Surya Abothula',
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
  authors: [{ name: 'Ram Sai Sri Surya Abothula', url: 'https://surya-portfolio-umber.vercel.app' }],
  openGraph: {
    title: 'Ram Sai Sri Surya Abothula | AI/LLM Engineer',
    description:
      'AI/LLM Engineer building production AI systems — LLM deployment, RAG pipelines, and semantic search at scale. Explore my portfolio, projects, and technical writing.',
    url: 'https://surya-portfolio-umber.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://surya-portfolio-umber.vercel.app/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ram Sai Sri Surya Abothula — AI/LLM Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Surya_21_',
    creator: '@_Surya_21_',
    title: 'Ram Sai Sri Surya Abothula | AI/LLM Engineer',
    description:
      'Explore my portfolio — production LLM deployment, RAG pipelines, semantic search, and full-stack capabilities.',
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                if (sessionStorage.getItem('hasBooted') && !isDev) {
                  document.documentElement.classList.add('has-booted');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <LoadingScreen />
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
