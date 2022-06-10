import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { searchContext } from '../utils/searchContext'
import './ChatHeader.css'

const ChatHeader = () => {
  const {search} = useContext(searchContext)

  const {searchUser} = search

  return (
    <Box
      sx={{
        width: '100%',
        height: '4rem',
        backgroundColor: '#1976d2',
        display: 'flex',
        padding: '.5rem 1rem',
        flex: '0 0 auto'
      }}
    >
      <div className="avatar-group">
        <Avatar>{searchUser ? searchUser.split('@')[1].substring(0, 1) : ''}</Avatar>
        <p>{searchUser}</p>
      </div>
    </Box>
  )
}

export default ChatHeader