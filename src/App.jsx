//import { useState } from 'react'
import { Spotlight } from '../src/components/ui/spotlight2'
import './App.css'
import MainNav from './components/navbar/MainNav'
import NewNav from './components/navbar/NewNav'
import Page1 from './components/Page1'
import { CardSpotlight } from './components/ui/card-spotlight'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-b from-gray-900 to-black text-white min-h-screen'>
      <Spotlight className="absolute top-0 left-0 opacity-40 mix-blend-lighten" fill="white" />
        <MainNav />
        <NewNav />
        
        <div className="text-white">
            <Page1 />
          </div>
      </div>
        
        {/*<CardSpotlight
        radius={50} // Spotlight radius
        color="#4a5568" // Spotlight color
        className="min-h-screen flex  justify-center bg-gray-900"
        >*/}
          
        {/*</CardSpotlight>*/}
      
    
    </>
  )
}

export default App
