import { Box } from "@mui/system"
import { Card, CardContent } from "@mui/material"

const messages = [
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 1'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 2'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 3'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 4'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 1'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 2'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 3'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 4'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, officia. 4'
  },
]

const ChatContent = () => {
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
        messages.map(({message}, i) => {

          return (
            <Card
              key={i}
              style={{backgroundColor: "#1976d2", color: "white"}}
              sx={{
                minWidth: 275,
                maxWidth: 500,
                marginBottom: '2rem',
                alignSelf: ++i % 2 === 0 ? 'flex-end' : 'flex-start',
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