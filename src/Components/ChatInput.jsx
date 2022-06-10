import { Box } from "@mui/system"
import { Button, styled, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

import './ChatInput.css'
import { useState } from "react";
import { useContext } from "react";
import { searchContext } from "../utils/searchContext";
import { addMessage } from "../services/messages";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    }
  },
});

const CssButton = styled(Button)({
  color: 'white',
  borderColor: 'white',
  '&:hover': {
    borderColor: '#dfdfdf',
    color: '#dfdfdf'
  },
});

const ChatInput = () => {
  const {search} = useContext(searchContext)
  const [message, setMessage] = useState('')

  const {idMessage} = search

  const handleSubmit = (e) => {
    e.preventDefault()

    addMessage({
      idMessage,
      message
    })
    setMessage('')
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '4rem',
        backgroundColor: '#1976d2',
        display: 'flex',
        alignItems: 'center',
        padding: '.5rem 1rem',
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <CssTextField
        size="small"
        id="message"
        name="message"
        label="Escribe un mensaje aquí"
        value={message}
        onChange={({target}) => setMessage(target.value)}
        sx={{
          marginRight: '1rem'
        }}
        fullWidth
        InputLabelProps={{
          style: { color: 'white' }
        }}
      />

      <CssButton
        variant="outlined"
        color="secondary"
        size="large"
        endIcon={<SendIcon />}
        sx={{ maxHeight: '40px' }}
        type="submit"
      >
        Enviar
      </CssButton>

    </Box>
  )
}

export default ChatInput