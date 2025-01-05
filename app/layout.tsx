import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anadolu Hastanesi | Sağlığınız İçin Yanınızdayız",
    template: "%s | Anadolu Hastanesi",
  },
  description: "Anadolu Hastanesi olarak modern tıbbi teknoloji ve uzman kadromuzla 7/24 sağlık hizmeti sunuyoruz. Dahiliye, Cerrahi, Kardiyoloji ve daha birçok branşta hizmetinizdeyiz.",
  keywords: [
    "Anadolu Hastanesi",
    "Hastane",
    "Sağlık",
    "Tıbbi Hizmetler",
    "Doktor",
    "Acil Servis",
    "Poliklinik",
    "Dahiliye",
    "Cerrahi",
    "Kardiyoloji",
  ],
  creator: "Anadolu Hastanesi",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://anadoluhastanesi.com",
    title: "Anadolu Hastanesi | Sağlığınız İçin Yanınızdayız",
    description: "Modern tıbbi teknoloji ve uzman kadromuzla 7/24 sağlık hizmeti",
    siteName: "Anadolu Hastanesi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo.svg",
  },

  alternates: {
    canonical: "https://anadoluhastanesi.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
