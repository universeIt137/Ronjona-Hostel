import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateOffer = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>Update Offer</h1>
      {
        id
      }
    </div>
  )
}

export default UpdateOffer
