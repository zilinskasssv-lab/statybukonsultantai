import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Statybų konsultantai | Techninė priežiūra visoje Lietuvoje",
    template: "%s | Statybų konsultantai",
  },
  description:
    "Licencijuoti statybų inžinieriai. Statinio statybos techninė priežiūra pagal STR, pastatų techninė priežiūra, statybos vadovas. 25 metų patirtis, darbas visoje Lietuvoje.",
  keywords: [
    "statybų techninė priežiūra",
    "pastatų techninė priežiūra",
    "statybos vadovas",
    "statybų inžinierius",
    "Kaunas",
    "Lietuva",
  ],
  authors: [{ name: "MB Statybų konsultantai" }],
  creator: "MB Statybų konsultantai",
  metadataBase: new URL("https://statybukonsultantai.lt"),
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://statybukonsultantai.lt",
    siteName: "Statybų konsultantai",
    title: "Statybų konsultantai | Techninė priežiūra visoje Lietuvoje",
    description:
      "Licencijuoti statybų inžinieriai. 25 metų patirtis. Techninė priežiūra, statybos vadovas visoje Lietuvoje.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Statybų konsultantai",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="lt"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}