import React from 'react'
import TradingViewWidget from './TradingViewWidget'
import Trending from './Trending'
import Cards from './Cards'
import Overview from './Overview'
import Footer from './Footer'

function Main() {
  return (
       <div className='all'>
    <div className='main'>
      <TradingViewWidget/>
      <Trending/>
     
    </div>
    <Cards/>
    <h1 className='s'>YOU MAY ALSO LIKE</h1>
  <Footer/>
    </div>
  )
}

export default Main
