import { useEffect } from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'

import { searchContext } from './utils/searchContext'

import './App.css'

import { user } from './db/gun-db'
import { useReducer } from 'react'
import searchReducer from './utils/searchReducer'

const darkTheme = createTheme();


function App() {

  const [search, dispatch] = useReducer(searchReducer, '')
  const navigate = useNavigate()

  useEffect(() => {
    if(!user.is) navigate('/login')
  }, [])

  return (
    <ThemeProvider theme={darkTheme} >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' 
            element={
              <searchContext.Provider value={{search, dispatch}}>
                <Home />
              </searchContext.Provider>
            }
          />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
