// File: app/layout.tsx
import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "It's Just DevOps",
  description:
    "All these *Ops terms? It's just DevOps applied to different domains!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          data-domain="itsjustdevops.wtf"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
