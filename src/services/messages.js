import { db, user } from '../db/gun-db'
import { v4 as uuidv4 } from 'uuid'

export const createMessages = () => {
  const idMessages = uuidv4()
  db.get('messages').get(idMessages).put(JSON.stringify([]))
  console.log(idMessages)

  return idMessages
}

export const getMessages = async({idMessages}) => {
  return await db.get('messages').get(idMessages)
}

export const addMessage = async({idMessage, message}) => {
  const messages = await db.get('messages').get(idMessage)
  const messagesArr = JSON.parse(messages)
  const currentUser = await user.get('alias')

  messagesArr.unshift({
    message,
    sender: `~@${currentUser}`
  })

  db.get('messages').get(idMessage).put(JSON.stringify(messagesArr))
}