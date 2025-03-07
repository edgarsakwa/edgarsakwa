import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import BootstrapClient from "@/components/BootstrapClient"
import BootstrapWrapper from "@/components/BootstrapWrapper"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BootstrapClient />
        </ThemeProvider>
      </body>
    </html>
  )
}