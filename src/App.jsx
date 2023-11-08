import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Index from './components/users/index/Index';
import Create from './components/users/create/Create';
import Details from './components/Details';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/users/index' element={<Index />} />
        <Route path='/users/create'  element={<Create />} />
        <Route path='/users/:id'  element={<Details />} />
        <Route path='*' element={<h2>user not found</h2>}/>
    </Routes>
  )
}

export default App