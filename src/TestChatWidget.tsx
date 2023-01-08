import { useDispatch } from 'react-redux'
import io from 'socket.io-client'
import { Widget } from 'WidgetComponent'

import { toggleMessageLoader } from 'redux/slices/behaviorSlice'
import UsersList from './components/AdminUi/UsersList'
import { useEffect, useState } from 'react'
import { addNewResponseMessage } from 'redux/slices/messagesSlice'

const socket = io('http://localhost:3000', { autoConnect: false })

const TestChatWidget = () => {
  const dispatch = useDispatch()
  const [receiver, setReceiver] = useState('')
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const [isConnected, setIsConnected] = useState(socket.connected)

  const handleConnect = () => {
    if (username) {
      socket.auth = { username }
      socket.connect()
    } else {
      console.error('No user name can not be empty')
    }
  }

  const handleSend = () => {
    if (!receiver.length && !message.length) {
      console.error('Both receiver and message input must have value')
      return
    }

    socket.emit('private message', {
      content: message,
      to: receiver
    })

  }

  const handleNewUserMessage = (newMessage: any) => {
    // .....
    dispatch(toggleMessageLoader())
  }

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    socket.on('connect_error', (err) => {
      if (err.message === 'invalid username') {
        console.error(err)
      }
    })

    socket.on("user connected", (user) => {
      console.log(user)
    });

    socket.on("private message", ({ content, from }) => {
      console.log('new message: ', {
        content,
        from
      })
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('connect_error')
      socket.off('user connected')
      socket.off('private message')
    }
  }, [])

  return (
    <div>
      <UsersList />
      <div>
        <p>Connected: {'' + isConnected}</p>
      </div>
      <br />

      {/* receiver's socket id input */}
      <label>Receiver's socket id</label>
      <input value={receiver} onChange={(e) => setReceiver(e.target.value)} />
      <br />

      {/* User name input */}
      <label>Your name</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button disabled={isConnected} onClick={handleConnect}>
        Connect
      </button>
      <br />

      {/* message input */}
      <label>Message</label>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button disabled={!isConnected} onClick={handleSend}>
        Send
      </button>

      <br />
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={handleNewUserMessage}
        imagePreview
        emojis
      />
    </div>
  )
}

export default TestChatWidget
