// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " Collins OBiora | Trumpet Player",
  description: "Trumpet player portfolio and contact.",
  icons: [{ url: "/icon.png", type: "image/png" }],

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
