import { db } from '../db/gun-db'
import { v4 as uuidv4 } from 'uuid'

export const createChat = () => {
  db.get('chat')
}