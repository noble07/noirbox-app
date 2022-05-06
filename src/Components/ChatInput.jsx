import { Box } from "@mui/system"
import { Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

import './ChatInput.css'

const ChatInput = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '4rem',
        backgroundColor: '#1976d2',
        display: 'flex',
        alignItems: 'center',
        padding: '.5rem 1rem',
        position: 'fixed',
        bottom: 0
      }}
    >
      <TextField
        size="small"
        id="message"
        name="message"
        label="Escribe un mensaje aquí"
        sx={{
          width: '60rem',
          marginRight: '1rem'
        }}
      />

      <Button variant="outlined" color="secondary" size="large" endIcon={<SendIcon />}>
        Enviar
      </Button>

    </Box>
  )
}

export default ChatInput