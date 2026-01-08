import { TeamHoverGrid } from '@/components/Team'
import React from 'react'
import { ORG_GROUPS } from "@/app/about/our-team/org-groups";
import Outeambanner from '../components/Outembanner';
import TeamGrid from './TeamGrid';
function page() {
  return (
     <div className="">

   <TeamGrid group={ORG_GROUPS[0]}/>
    </div>
  )
}

export default page