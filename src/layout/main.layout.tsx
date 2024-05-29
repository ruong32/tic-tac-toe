import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => (
  <div className="h-[100dvh] h-screen w-full flex flex-col bg-[linear-gradient(hsl(214,47%,23%),hsl(237,49%,15%))]">
    <Outlet />
  </div>
)
