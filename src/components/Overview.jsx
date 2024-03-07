import React from 'react'
import Fundamentals from './Fundamentals'
import Sentiment from '../Sentiment'
import About from '../About'

function Overview() {
  return (
    <div>
      <Fundamentals/>
      <Sentiment/>
      <About/>
    </div>
  )
}

export default Overview
