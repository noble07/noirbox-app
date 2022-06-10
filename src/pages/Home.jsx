import { useEffect, useContext, useState } from 'react'

import { searchContext } from '../utils/searchContext'

import { Grid } from '@mui/material'
import ChatContent from '../Components/ChatContent'
import ChatHeader from '../Components/ChatHeader'
import ChatInput from '../Components/ChatInput'
import SideBar from '../Components/SideBar'
import { findUserChat } from '../services/user'
import { actions } from '../utils/actions'
import { db, user } from '../db/gun-db'


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
    // db.get('user').get('~@juanw').once(data => console.log('~@juanw', JSON.parse(data)))
    /* db.get('user').get('~@juank').once(data => console.log('~@juank', data))
    db.get('chat').get('642f17f5-3ac5-40a8-b052-150e051a20af').once(data => console.log('Messages', data))
    db.get('messages').get('2f5a0f1d-aa28-42e9-a5e1-b0dbd6989cb1').once(data => console.log('Messages', data)) */

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
            maxHeight: '100vh'
          }}
        >
          <ChatHeader />
          <ChatContent messages={listMessages} />
          <ChatInput />
        </Grid>
      </Grid>
    </>
  )
}

export default Home