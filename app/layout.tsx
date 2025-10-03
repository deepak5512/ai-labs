import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AI Labs",
  description: "All AI, ML, DL documentation at one place",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
