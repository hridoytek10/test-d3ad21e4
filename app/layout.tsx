import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import siteData from "@/data/site.json"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: siteData.siteTitle,
  description: siteData.siteDescription,
  generator: "v0.app",
  openGraph: {
    title: siteData.siteTitle,
    description: siteData.siteDescription,
    image: "/preview.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} data-hover="glow" data-teknext-avatar-border="none" data-teknext-avatar-anim="shimmer" data-teknext-banner-anim="none" data-teknext-hero-style="none" data-teknext-header-design="luxury_gold">
        {children}
      </body>
    </html>
  )
}
