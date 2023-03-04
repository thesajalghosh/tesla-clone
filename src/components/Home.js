import React from 'react'
import "../CssFile/Home.css"
import Section from './Section'

const Home = () => {
  return (
    <div className='container'>
    <Section
      title="Model 3"
      description="Leasing starting at $349/mo"
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&format=auto%22"
      lefttext="Custom Order"
      righttext="Demo Drive"
      
    />
    <Section
      title="Model Y"
      description="Leasing starting at $349/mo"
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop?quality=auto-medium&format=auto"
      lefttext="Custom Order"
      righttext="Demo Drive"
    />
    <Section
       title="Model S"
      description="Schedule A Demo Drive"
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&format=auto"
      lefttext="Custom Order"
      righttext="View Inventory"
    />
    <Section
       title="Model X"
      description="Schedule A Demo Drive"
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD?quality=auto-medium&format=auto"
      lefttext="Custom Order"
      righttext="View Inventory"
    />
    <Section
       title="Solar Panels"
      description="Lowest Cost Solar Panels in America"
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
      lefttext="Order Now"
      righttext="Learn More"
    />
     <Section
       title="Solar Roof"
      description="Produce Clean Energy From Your Roof"
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto"
      lefttext="Order Now"
      righttext="Learn More"
    />
    <Section
       title="Accessories"
      description=""
      backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046"
      lefttext="Shop Now"
      righttext=""
    />
    </div>
  )
}

export default Home
