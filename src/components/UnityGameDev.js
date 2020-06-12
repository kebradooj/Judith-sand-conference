import React from 'react'

const UnityGameDev = ({data}) => {
  return (
    <div>
      <img src={data.events[2].unity.image} alt=""/>
  <h2>{data.events[2].unity.title}</h2>
  <p>{data.events[2].unity.description}</p>
    </div>
  )
}

export default UnityGameDev
