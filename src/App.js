import React from 'react';
import './App.css';

import ExerciseDetail from './Pages/ExerciseDetails';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App