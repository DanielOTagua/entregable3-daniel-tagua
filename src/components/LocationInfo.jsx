import React from 'react'
import "./style/locationInfo.css"

const LocationInfo = ({location}) => {

    /* console.log(location) */

  return (
    <article className='locationInfo'>
        {<h2 className='locationInfo__title'>{location?.name}</h2>}
        <ul className='locationInfo__list'>
            <li className='locationInfo-li'><span>Type: </span>{location?.type}</li>
            <li className='locationInfo-li'><span>Dimension: </span>{location?.dimension}</li>
            <li className='locationInfo-li'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo