import { TeamHoverGrid } from '@/components/Team'
import React from 'react'
import { ORG_GROUPS } from "@/app/about/our-team/org-groups";
import Outeambanner from '../components/Outembanner';
function page() {
  return (
     <div className="">
      <Outeambanner/>
      <TeamHoverGrid group={ORG_GROUPS[0]} />
    </div>
  )
}

export default page