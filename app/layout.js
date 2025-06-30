import { Poppins } from "next/font/google";  // Changed from Roboto to Poppins
import Header from "./components/Header";
import Footer from "./components/Footer";
import Call from "./components/Call";
import "./globals.css";

// Apply the Poppins font and define a CSS variable
const poppins = Poppins({
  variable: "--font-roboto",  // Keep this variable name if used in CSS
  subsets: ["latin"],
  weight: ["400", "700"],     // You can customize weights as needed
});

export const metadata = {
  title: "Vector Academy",
  description: "Your path to academic excellence.",
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
