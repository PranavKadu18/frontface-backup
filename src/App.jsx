import React from 'react'
import Interface from './components/Interface'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen'>
      <Interface />
    </div>
  )
}

export default App