import type { Metadata } from "next";
import { Inter, Cormorant_Garamond  } from "next/font/google";
import styles from "../styles/Page.module.scss";
import "./globals.css";
import Link from "next/link";

const inter = Cormorant_Garamond({ subsets: ["cyrillic"], weight: "400", style: "normal" });

export const metadata: Metadata = {
  title: "Madeleine Becker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.page}>
          <div className={styles.title}>
            <Link href="/">Madeleine Becker</Link>
          </div>
          {children} 
        </div>
      </body>
    </html>
  );
}
