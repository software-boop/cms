
import DemoPage from '@/components/aboutdemo'
import AnimatedCapabilitiesOrbit from '@/components/AnimatedCapabilitiesOrbit'
import { Achievements, Process, Work } from '@/components/homeabout/Achiementsdemo'
import BTPL from '@/components/homeabout/Soline'
import React from 'react'
import AboutHero from './About'
import MissionVisionPhilosophy from './MissionVisionPhilosophy'
import BrihaspathiDeployments from './BrihaspathiDeployments'
import ValuesSection from './ValuesSection'
import { TimelineDemo } from './components/TimelineDemo'
import OurJourney from './our-journey/page'


function page() {
  return (
    <div>
      
{/* <DemoPage/> */}
<AboutHero/>


<OurJourney/>






<Process/> 



<ValuesSection/>
<BrihaspathiDeployments/>
<MissionVisionPhilosophy/>
<AnimatedCapabilitiesOrbit/>

{/* <BTPL/> */}
{/* <Achievements/> */}
    </div>
  )
}

export default page