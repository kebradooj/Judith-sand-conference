import React from 'react'

const ReactNative = ({data}) => {
  return (
    <div>
      <img src={data.events[1].reactnative.image} alt=""/>
  <h2>{data.events[1].reactnative.title}</h2>
  <p>{data.events[1].reactnative.description}</p>
    </div>
  )
}

export default ReactNative
