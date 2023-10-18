import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secure Message Encryption/Decryption Too',
  description: 'Protect your messages with our secure online message encryption and decryption tool. Easily encrypt and decrypt your sensitive information using this web-based application.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
