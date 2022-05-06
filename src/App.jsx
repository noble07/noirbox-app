import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'

import './App.css'

const darkTheme = createTheme();


function App() {
  return (
    <ThemeProvider theme={darkTheme} >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
