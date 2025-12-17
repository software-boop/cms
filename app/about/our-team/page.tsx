import { TeamHoverGrid } from '@/components/Team'
import React from 'react'
import { ORG_GROUPS } from "@/app/about/our-team/org-groups";
function page() {
  return (
     <div className="p-8">
      <TeamHoverGrid group={ORG_GROUPS[0]} />
    </div>
  )
}

export default page