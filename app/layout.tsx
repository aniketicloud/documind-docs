import { RootProvider } from "fumadocs-ui/provider/next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Documind Docs",
    template: "%s | Documind Docs",
  },
  description:
    "Documentation for Documind — document intelligence, chat, storage, and local development.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
