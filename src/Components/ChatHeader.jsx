import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import './ChatHeader.css'

const ChatHeader = () => {
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
        <Avatar>LI</Avatar>
        <p>Lorem Ipsum</p>
      </div>
    </Box>
  )
}

export default ChatHeader