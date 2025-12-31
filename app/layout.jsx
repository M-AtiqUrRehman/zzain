import "./globals.css";

import AppShell from './components/AppShell'

export const metadata = {
  title: 'ZainApp (Next.js)',
  description: 'Migrated frontend scaffold using Next.js app directory'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
