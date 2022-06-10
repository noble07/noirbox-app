import { db } from '../db/gun-db'

export const createUser = ({alias}) => {
  db.get('user').put({
    alias
  })
}

export const addChatToUser = ({chatId, alias}) => {
  db.get('user').get(alias).once((data) => {
    if (data) {
      const chats = JSON.parse(data)
      console.log(chats)
    } else {
      db.get('user').put({
        alias,
        chats: JSON.stringify([chatId])
      })
    }
  })
}