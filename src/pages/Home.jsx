import { useEffect } from 'react'

import { db } from '../db/gun-db'

import { Grid } from '@mui/material'
import ChatContent from '../Components/ChatContent'
import ChatHeader from '../Components/ChatHeader'
import ChatInput from '../Components/ChatInput'
import SideBar from '../Components/SideBar'
import { addChatToUser } from '../services/user'
import { useState } from 'react'
import { useContext } from 'react'
import { searchContext } from '../utils/searchContext'

const user = {
  
}

const Home = () => {

  const {search} = useContext(searchContext)

  return (
    <>
      <Grid container >
        <Grid
          item
          xs={3}
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <SideBar />
        </Grid>
        <Grid item xs={9}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100vh'
          }}
        >
          {search}
          <ChatHeader />
          <ChatContent />
          <ChatInput />
        </Grid>
      </Grid>
    </>
  )
}

export default Home