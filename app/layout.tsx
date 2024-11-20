import type { Metadata } from "next";
import causten from "./fonts";
import "./css/style.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recipe book",
  description: "A book of recipes for delicious dishes from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${causten.variable}`}>
        <div className="wrapper">
            <Header />
            <main className="page">{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
