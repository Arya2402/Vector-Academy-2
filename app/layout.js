import { Roboto } from "next/font/google";  // Importing Roboto font
import Header from "./components/Header";   // Import Header component
import Footer from "./components/Footer";   // Import Footer component
import Call from "./components/Call";       // Import Call component
import "./globals.css";                    // Global CSS

// Applying the Roboto font with a custom CSS variable
const roboto = Roboto({
  variable: "--font-roboto", // Customize the CSS variable name
  subsets: ["latin"],        // Include Latin subset
});

// Metadata for the layout (used for SEO)
export const metadata = {
  title: "Vector Academy",
  description: "Your path to academic excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {/* Call Section (Always visible, above the header) */}
        <Call />

        {/* Common Header for all pages (with margin-top to avoid overlap with Call) */}
        <Header />
        
        {/* The content of the specific page will be rendered here */}
        <main>{children}</main>
        
        {/* Common Footer for all pages */}
        <Footer />
      </body>
    </html>
  );
}

