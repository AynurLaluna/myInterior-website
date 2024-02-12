import NavBar from '@/Components/NavBar'
import React from 'react';

function layout({ children }:{ children: React.ReactNode }) {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default layout