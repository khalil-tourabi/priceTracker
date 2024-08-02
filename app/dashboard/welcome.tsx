'use client';

import React from 'react'
import { useSession } from "next-auth/react";

const Welcome = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
      }

  return (
    <>
    <p className='text-3xl font-medium text-right pb-10'>Welcome, {session?.user?.name}</p>
    </>
  )
}

export default Welcome