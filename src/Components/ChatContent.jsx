import { Box } from '@mui/system'
import { Card, CardContent } from '@mui/material'
import { useContext } from 'react'
import { searchContext } from '../utils/searchContext'

const ChatContent = ({messages}) => {

  const {search} = useContext(searchContext)

  const {user} = search

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: '.5rem 1rem',
        overflow: 'auto',
        marginBottom: 'auto'
      }}
    >
      {
        messages.map(({message, sender}, i) => {

          console.log(sender === user)

          return (
            <Card
              key={i}
              style={{backgroundColor: "#1976d2", color: "white"}}
              sx={{
                minWidth: 275,
                maxWidth: 500,
                marginBottom: '2rem',
                alignSelf: sender === user ? 'flex-end' : 'flex-start',
                flex: '1 0 auto'
              }}
            >
              <CardContent>
                {message}
              </CardContent>
            </Card>
          )
        })
      }
    </Box>
  )
}

export default ChatContent