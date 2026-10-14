import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalashevents.com.np"),
  title: "Kalash Events Pvt. Ltd. | Premier Cultural Pageants & Event Management Nepal",
  description:
    "Official website of Kalash Events Pvt. Ltd. (कलश इभेन्ट्स प्रा.लि.), Kathmandu, Nepal. Organizers of Newa: Maicha Baucha, Little Miss Angel Nepal, Misa Dhime Baja, and premier corporate, fashion, and cultural celebrations.",
  keywords: [
    "Kalash Events",
    "Kalash Events Pvt Ltd",
    "Kalasheventspvtltd",
    "Newa: Maicha Baucha",
    "Little Miss Angel Nepal",
    "Little Master Nepal",
    "Misa Dhime Baja",
    "Sanjay Maharjan",
    "Event Management Nepal",
    "Kathmandu Pageant",
    "Rastriya Nachghar",
  ],
  authors: [{ name: "Kalash Events Pvt. Ltd." }],
  creator: "Kalash Events Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.facebook.com/Kalasheventspvtltd",
    title: "Kalash Events Pvt. Ltd. | Cultural Pageants & Event Management",
    description:
      "Preserving Heritage, Grooming Champions & Staging Grand Celebrations across Nepal.",
    siteName: "Kalash Events",
    images: [
      {
        url: "/kalash-logo.jpg",
        width: 720,
        height: 720,
        alt: "Kalash Events Official Logo",
      },
    ],
  },
  icons: {
    icon: "/kalash-logo.jpg",
    apple: "/kalash-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#fafaf9] text-slate-900 flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
