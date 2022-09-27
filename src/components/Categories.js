import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { getCategories } from '../api'

const Categories = () => {
  const categories = getCategories()

  return (
    <>
      <div className="border-b-2 border-gray-700">
        <div className='font-bold'>Session Categories</div>
        <div className='flex flex-row flex-wrap justify-around text-purple-700 font-bold'>
          {categories.map(cat => (
            <div key={cat.id} className='border border-purple-700 mx-2'>
              <NavLink to={cat.id} className={({isActive})=> isActive ? 'text-zinc-800 active:bg-yellow-600' : 'active:bg-yellow-600'}>{cat.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Categories