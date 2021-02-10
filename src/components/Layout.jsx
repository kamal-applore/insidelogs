import React from 'react'
import Footer from '../sections/Footer'

import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
