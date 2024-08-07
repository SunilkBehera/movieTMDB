import React from 'react'
import {mobileNavigation} from '../contants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden bg-black bg-opacity-60  backdrop-blur-3xl fixed bottom-0 w-full h-14 z-40'>
          <div className='flex justify-between items-center h-full text-neutral-500 '>
            {
              mobileNavigation.map((nav, index) => {
                return (
                  <NavLink key={nav.label+"movilenavigation"}
                  to={nav.href}
                  className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}
                  >
                    <div className='text-2xl'>
                      {nav.icon}
                    </div>
                    <p className='text-sm'>{nav.label}</p>
                  </NavLink>
                )
              })
               
            }
          </div>
    </section>
  )
}

export default MobileNavigation