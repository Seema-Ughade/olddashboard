import React from 'react'
import classNames from 'classnames';
import { FcBullish } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation'
import { HiOutlineLogout } from 'react-icons/hi';
const LinkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-customBlue hover:text-white hover:no-underline active:bg-customBlue rounded-md text-base'

const Sidebar = () => {
  return (
    <div className = 'text-xs bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <FcBullish fontSize={24}/>
            <span className='text-neutral-100 text-lg'>LEADPRO</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item ={item}/>
          ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-red-900'>
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item =>(
            <SidebarLink key={item.key} item ={item}/>
          ))}
          <div className={classNames('text-gray-400 cursor-pointer',LinkClasses)}>
              <span>
                <HiOutlineLogout/>
              </span>
              Logout
          </div>
          
        </div>
        </div>
  )
}

function SidebarLink({item}){
  
  return(
    <Link to = {item.path} className={classNames('text-gray-400' ,LinkClasses)}>
    <span className=' text-xl'>
      {item.icon}
    </span>
    {item.label}
    </Link>
  )
}


export default Sidebar