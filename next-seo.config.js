/**
 * SEO configuration for the Clean Jaddah website
 */
const SEO = {
  titleTemplate: '%s | Clean With Fresh',
  defaultTitle: 'Clean With Fresh - Professional Cleaning Services',
  description: 'Professional cleaning services in Jaddah. We provide residential and commercial cleaning with eco-friendly solutions.',
  canonical: 'https://cleanwithfresh.com',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cleanwithfresh.com/',
    siteName: 'Clean with Fresh',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean with Fresh',
      },
    ],
  },
  twitter: {
    handle: '@cleanwithfresh',
    site: '@cleanwithfresh',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'cleaning, jaddah, professional cleaning, home cleaning, office cleaning, eco-friendly cleaning',
    },
  ],
};

export default SEO;
