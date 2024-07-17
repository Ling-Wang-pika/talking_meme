import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { UserContextProvider } from "@/context/UserContext";

const url = process.env.VERCEL_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(url),
  title: "Talking Meme",
  description: "Sould out your meme! Add or pick a meme, write your text, and AI do the rest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="font-sans px-4 bg-[var(--bg-color)] w-full">
        <UserContextProvider>
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </UserContextProvider>
      </body>
    </html>
  );
}
