import React from 'react'
import { Link } from 'react-router-dom'
import DateRangePicker from '../components/DateRangePicker'

const DashBoard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link to='/product' >Dashboard</Link>
      <div >
      <DateRangePicker />

      </div>
    </div>
          
    
  )
}

export default DashBoard