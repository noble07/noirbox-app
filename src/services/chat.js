import { db } from '../db/gun-db'
import { v4 as uuidv4 } from 'uuid'
import { createMessages } from './messages'

export const createChat = () => {
  const idChat = uuidv4()
  const idMessages = createMessages()

  db.get('chat').get(idChat).put(idMessages)
  console.log('createChat[idChat, idMessages]', idChat, idMessages)

  return idChat
}