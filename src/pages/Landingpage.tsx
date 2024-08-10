import Footer from '@/components/Footer'
import Formpage from '@/components/Formpage'
import Homepage from '@/components/Homepage'
import React from 'react'
import Image from 'next/image';

function Landingpage() {
  return (
    <div className="bg-white">
      <Homepage/>
      <Formpage/>
      <Footer/>
    </div>
  )
}

export default Landingpage
