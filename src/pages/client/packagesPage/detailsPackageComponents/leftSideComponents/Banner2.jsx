import React from 'react'
import PackagesDetailsImage from '../../../../../components/client/packages-details-images/PackagesDetailsImage'

const Banner2 = ({packagesDetailsData}) => {
  return (
    <div>
      <div className='' >
        <PackagesDetailsImage packagesDetailsData = {packagesDetailsData} ></PackagesDetailsImage>
      </div>
    </div>
  )
}

export default Banner2
