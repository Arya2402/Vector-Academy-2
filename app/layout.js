import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

// Setup Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Metadata for SEO and Social Sharing
export const metadata = {
  title: "Vector Academy – Vector Junior College, Nizamabad",
  description:
    "Vector Academy is Nizamabad's leading coaching and junior college institution for JEE, NEET, and EAPCET. We offer personalized guidance, experienced faculty, and top-tier results. Join us for the best academic future.",
  keywords: [
    "Vector Academy",
    "Vector Junior College",
    "Vector College",
    "Vector School",
    "Vector Nizamabad",
    "JEE Coaching Nizamabad",
    "NEET Coaching Nizamabad",
    "EAPCET Coaching Nizamabad",
    "Best Junior College Nizamabad",
    "Inter College in Nizamabad",
    "JEE NEET EAMCET Preparation",
    "Top Colleges in Nizamabad",
    "College with Hostel in Nizamabad",
  ],
  metadataBase: new URL("https://vectoredu.in"),
  openGraph: {
    title: "Vector Academy – Shape Your Future",
    description:
      "Join Vector Academy, the top junior college in Nizamabad offering expert coaching for JEE, NEET, and EAPCET with proven results.",
    url: "https://vectoredu.in",
    siteName: "Vector Academy",
    images: [
      {
        url: "/images/og.png", // <- updated to actual OG image
        width: 1200,
        height: 630,
        alt: "Vector Academy Open Graph Banner",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector Academy – Shape Your Future",
    description:
      "Join Vector Academy, the top junior college in Nizamabad for JEE, NEET, and EAPCET preparation.",
    images: ["/images/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
