import { useEffect, useContext, useState } from 'react'

import { searchContext } from '../utils/searchContext'

import { Grid, Paper, Typography } from '@mui/material'
import ChatContent from '../Components/ChatContent'
import ChatHeader from '../Components/ChatHeader'
import ChatInput from '../Components/ChatInput'
import SideBar from '../Components/SideBar'
import { findUserChat } from '../services/user'
import { actions } from '../utils/actions'
import { db, user } from '../db/gun-db'

import NoirBox from '../assets/img/noirbox.png'

const Home = () => {
  
  const {search, dispatch} = useContext(searchContext)
  const [listMessages, setListMessages] = useState([])
  
  const {searchUser, idMessage} = search

  useEffect(() => {
    // Gun User
    user.get('alias').once((data) => {
      dispatch({
        type: actions.setUser,
        payload: data
      })
    })
  }, [])
  

  useEffect(() => {
    if (idMessage) {
      db.get('messages').get(idMessage).on((data) => {
        setListMessages(JSON.parse(data))
      })
    }
  }, [idMessage, setListMessages])
  

  useEffect(() => {
    findUserChat({searchUser}).then(res => {
      if (!res) return
      const { idMessages } = res
      console.log('findUserChat', idMessages)
      dispatch({
        type: actions.setIdMessage,
        payload: idMessages
      })
    })
  }, [searchUser, dispatch])
    

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
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: '100vh'
          }}
        >
          {
            (!idMessage)
            ? (
              <Paper
                elevation={4}
                sx={{
                  margin: 10,
                  padding: 2,
                  textAlign: 'center'
                }}
              >
                <img src={NoirBox} alt="Logo NoirBox" />
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  Ahora pudes enviar y recibir mensajes de una manera rápida y segura.
                  <br />
                  A través de nuestra red descentralizada.
                </Typography>
              </Paper>
            )
            : (
              <>
                <ChatHeader />
                <ChatContent messages={listMessages} />
                <ChatInput />
              </>
            ) 
          }
        </Grid>
      </Grid>
    </>
  )
}

export default Home