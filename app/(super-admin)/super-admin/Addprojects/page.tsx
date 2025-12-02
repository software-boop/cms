"use client";

import ProjectsPage from '@/app/projects/page';
import React, { Suspense } from 'react'


function page() {
  return (
    <div>
      <Suspense fallback={<div className="p-4">Loading departments...</div>}>


        <ProjectsPage />

      </Suspense>





    </div>
  )
}

export default page