import { useEffect } from 'react'

import { db } from '../db/gun-db'

import { Box } from '@mui/system'
import { Card, CardContent } from '@mui/material'

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

/* const chat = {
  user1: '~@juand',
  user2: '~@juank',
  messages: [
    {
      message: 'asdasd',
      sender: '~@juand'
    },
    {
      message: 'perro',
      sender: '~@juank'
    }
  ]
} */

/* const messages = {
  chatId: 'asdasd',
  userId: 'asdasd'
}

const chat = {
  usersId: [
    '~@juand',
    '~@juank'
  ],
  messagesId: ''
}

const user = [
  {
    alias: '~@juand'
  },
  {
    alias: '~@juank'
  }
] */

const ChatContent = () => {

  useEffect(() => {
    db.get('chat').get('usersIds').once(async (data, key) => {
      console.log(data)
    })
  }, [])
  

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