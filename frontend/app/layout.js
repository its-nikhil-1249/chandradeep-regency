import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins'
});

export const metadata = {
  title: "Hotel Chandradeep Regency | Luxury Stay in Dhule",
  description: "Experience luxury and comfort at Hotel Chandradeep Regency, Dhule. Premium rooms, banquet hall, and top-notch amenities for your perfect stay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-cream text-ink`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
