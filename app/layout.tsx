import './globals.css'
import type { Metadata } from 'next'
import { Play } from 'next/font/google'

import Header from '../components/header';
import Footer from '../components/footer';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const play = Play({
  subsets: ['latin'],
  weight:["700"],
  display: 'swap',
  variable: '--font-play',
}) // google fonts 

export const metadata: Metadata = {
  title: 'SangEok Blog',
  description: 'Generated by SangEok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${play.variable}`}>
      <body>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
