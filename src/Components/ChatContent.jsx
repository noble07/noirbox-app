import { Box } from "@mui/system"
import { Card, CardContent } from "@mui/material"

const messages = [
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia.'
  },
]

const ChatContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '.5rem 1rem'
      }}
    >
      {
        messages.map(({message}, i) => {

          console.log(++i)

          return (
            <Card
              style={{backgroundColor: "#1976d2", color: "white"}}
              sx={{
                minWidth: 275,
                maxWidth: 500,
                marginBottom: '2rem',
                alignSelf: ++i % 2 === 0 ? 'flex-end' : 'flex-start'
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