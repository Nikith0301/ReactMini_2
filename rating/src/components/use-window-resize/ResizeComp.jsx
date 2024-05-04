import React from 'react'
import Resize from './Resize'
export default function ResizeComp() {

    const windowSize=Resize();
    const {width,height}=windowSize;

  return (
    <div>
    <h1>Use Window resize Hook</h1>
    <p>Width is {width}</p>
    <p>Height is {height}</p>
  </div>
  )
}
