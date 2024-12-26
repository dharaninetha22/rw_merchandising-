import React from 'react'
import HeroSection from './HeroSection'
import Marquee from './Marquee'
import About from './About'
import Categories from './Categories'
import Discounts from './Discounts'
import Collection from './Collection'
import WorkProcessing from './WorkProcessing'
import HurryUp from './HurryUp'
import OurNewsletter from './OurNewsletter'
// import CartPage from './CartPage'

const Dashboard:React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <Marquee/>
      <About/>
      {/* <CartPage/> */}
      <Categories/>
      <Discounts/>
      <Collection />
      <WorkProcessing/>
      <HurryUp/>
      <OurNewsletter/>
    </div>
  )
}

export default Dashboard
