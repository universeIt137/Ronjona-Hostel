import React from 'react'
import { useParams } from 'react-router-dom'

const FilterPackages = () => {
    const {id} = useParams()
  return (
      <div className='h-screen mt-28 ' >
          {id}
      <h1>filter packages</h1>
    </div>
  )
}

export default FilterPackages
