import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Goals from './components/Goals'
import WorkoutInput from './components/WorkoutInput'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import GoalsTable from './components/GoalsTable'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/goals' element={<Goals />} />
          <Route path='/' element={<WorkoutInput />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goalsDashboard' element={<GoalsTable />} />
        
        </Routes>
      </Router>
    </>
  )
}