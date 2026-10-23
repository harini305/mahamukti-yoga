import { Crimson_Pro, Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import FooterHeight from '@/components/FooterHeight';
import { EnquiryProvider } from '@/components/Enquiry';
import './globals.css';

const serif = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Mahamukti Yoga Bali | Yoga Teacher Training & Retreats in Ubud',
    template: '%s | Mahamukti Yoga Bali',
  },
  description:
    'Yoga Alliance certified yoga teacher training and residential yoga retreats in Ubud, Bali, led by Akhilesh Bodhi.',
  // Design demo: keep it out of search indexes.
  robots: { index: false, follow: false },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#faf8f8',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <EnquiryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </EnquiryProvider>
        <Motion />
        <FooterHeight />
      </body>
    </html>
  );
}
