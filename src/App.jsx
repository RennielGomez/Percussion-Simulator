import React from 'react'
import DrumSet from './DrumSet'
import PianoSet from './PianoSet'
import XylophoneSet from './XylophoneSet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Index'


function App() {

  return (<div>

    {/*Solution1: Remove the listener of the other pages once one link is click on the menu */}
    {/*Solution2: Detect if page is on the screen and enable Event Listener only if the page is shown in the screen */}

    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/drums' element={<DrumSet />} />
        <Route path='/piano' element={<PianoSet />} />
        <Route path='/xylophone' element={<XylophoneSet />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App