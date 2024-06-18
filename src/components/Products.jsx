import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
   <>
   <div>
   <p>this is products page</p>
   <Link to = '/dashboard' className='underline'>
   go to dashboard
   </Link>
   </div>
   </>
  )
}

export default Products