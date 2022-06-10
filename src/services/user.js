import { db, user } from '../db/gun-db'
import { createChat } from './chat'
import { getMessages } from './messages'

/**
 * User {
 *   '~@juank': {
 *      chats: [{
 *        idChat: '123123123'
 *      }]
 *    }
 * }
 * 
 * Chats {
 *  425234234: {
 *    idMessages: '123123'
 *  }
 * }
 * 
 * messages {
 *  1231231123: {
 *    messages: '[{
 *      message: 'Hola bebe'
 *      sender: '~@juank'
 *    }]'
 *  }
 * }
 */


export const findUserChat = async({searchUser}) => {

  if (!searchUser) return null

  const data = await db.get('user').get(searchUser)
  const currentUser = await user.get('alias')
  const currentUserChats = await db.get('user').get(`~@${currentUser}`)

  if (data) {
    const chatsReceiver = JSON.parse(data)
    const currentUserChatsArr = JSON.parse(currentUserChats)
    console.log('Receiver', chatsReceiver)
    console.log('Current', currentUserChatsArr)

    const chatExist = chatsReceiver.find(c => 
      currentUserChatsArr.some(
        b => b.idChat === c.idChat
      )
    )

    
    if(!chatExist) {
      const idChat = createChat()

      const newCurrentUserChat = currentUserChats 
        ? JSON.parse(currentUserChats).push({idChat})
        : [{idChat}]

      chatsReceiver.push({idChat})

      db.get('user').get(`~@${currentUser}`).put(JSON.stringify(newCurrentUserChat))

      db.get('user').get(searchUser).put(JSON.stringify(chatsReceiver))

      const idMessages = await db.get('chat').get(idChat)
      const messages = JSON.parse(await getMessages({idMessages}))

      return {
        idMessages,
        messages
      }
    }
  
    const idMessages = await db.get('chat').get(chatExist.idChat)
    const messagesJson = await getMessages({idMessages})
    const messagesArr = JSON.parse(messagesJson)


    return {
      idMessages,
      messages: messagesArr
    }
 
  } else {

    // Agregar nuevo chat al usuario logeado
    const idChat = createChat()
    const newCurrentUserChat = currentUserChats 
      ? JSON.parse(currentUserChats).push({idChat})
      : [{idChat}]

    db.get('user').get(`~@${currentUser}`).put(JSON.stringify(newCurrentUserChat))

    // Agregar nuevo chat al usuario de la busqueda
    db.get('user').get(searchUser).put(JSON.stringify([{idChat}]))
    console.log('llega')

    return idChat
  }
}

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