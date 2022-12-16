import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { About, Home, Store } from './pages';

function App() {

  return (
   <Container className="mb-4">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
     </Routes>
   </Container>
  )
}

export default App
