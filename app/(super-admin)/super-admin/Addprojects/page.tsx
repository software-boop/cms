"use client";

import React, { Suspense } from 'react'

import Onliveproject from "./onliveproject"
function page() {
  return (
    <div>
      <Suspense fallback={<div className="p-4">Loading departments...</div>}>


        <Onliveproject />

      </Suspense>





    </div>
  )
}

export default page