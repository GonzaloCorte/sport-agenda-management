
import { Inter } from 'next/font/google'
import { SessionProvider, useSession } from 'next-auth/react';
import Provider from '@/components/Provider';
import Nav from '@/components/Nav';
import './../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to I\'mnozy',
  description: 'Where you can stop being lazy',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body >
        <Provider>
          <Nav/>
          {children}
        
        </Provider>  
      </body>
    </html>
  )
}
