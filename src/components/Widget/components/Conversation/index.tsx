import { useRef, useState, useEffect, ReactNode } from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import cn from 'classnames'

import Header from './components/Header'
import Messages from './components/Messages'
import Sender from './components/Sender'
import QuickButtons from './components/QuickButtons'

import { AnyFunction } from '@/utils/types'

import './style.scss'

interface ISenderRef {
  onSelectEmoji: (event: any) => void
}

type Props = {
  title: string
  subtitle: string
  senderPlaceHolder: string
  showCloseButton: boolean
  disabledInput: boolean
  autofocus: boolean
  className: string
  sendMessage: AnyFunction
  toggleChat: AnyFunction
  profileAvatar?: string
  profileClientAvatar?: string
  titleAvatar?: string
  onQuickButtonClicked?: AnyFunction
  onTextInputChange?: (event: any) => void
  sendButtonAlt: string
  showTimeStamp: boolean
  resizable?: boolean
  emojis?: boolean
  showStartScreen?: boolean
  startScreen?: ReactNode
}

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  profileClientAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  resizable,
  emojis,
  showStartScreen,
  startScreen,
}: Props) {
  const [containerDiv, setContainerDiv] = useState<HTMLElement | null>()
  let startX: any, startWidth: any

  useEffect(() => {
    const containerDiv = document.getElementById('rcw-conversation-container')
    setContainerDiv(containerDiv)
  }, [])

  const initResize = (e: any) => {
    if (resizable) {
      startX = e.clientX
      if (document.defaultView && containerDiv) {
        startWidth = parseInt(
          document.defaultView.getComputedStyle(containerDiv).width,
        )
        window.addEventListener('mousemove', resize, false)
        window.addEventListener('mouseup', stopResize, false)
      }
    }
  }

  const resize = (e: any) => {
    if (containerDiv) {
      containerDiv.style.width = startWidth - e.clientX + startX + 'px'
    }
  }

  const stopResize = (e: any) => {
    window.removeEventListener('mousemove', resize, false)
    window.removeEventListener('mouseup', stopResize, false)
  }

  const [pickerOffset, setOffset] = useState(0)
  const senderRef = useRef<ISenderRef>(null!)
  const [pickerStatus, setPicket] = useState(false)

  const onSelectEmoji = (emoji: any) => {
    senderRef.current?.onSelectEmoji(emoji)
  }

  const togglePicker = () => {
    setPicket((prevPickerStatus) => !prevPickerStatus)
  }

  const handlerSendMsn = (event: any) => {
    sendMessage(event)
    if (pickerStatus) setPicket(false)
  }

  return (
    <div
      id="rcw-conversation-container"
      onMouseDown={initResize}
      className={cn('rcw-conversation-container', className)}
      aria-live="polite"
    >
      {resizable && <div className="rcw-conversation-resizer" />}
      <Header
        title={title}
        subtitle={subtitle}
        toggleChat={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
      />
      {/* showStartScreen is true then render startScreen component */}
      {showStartScreen && startScreen ? (
        startScreen
      ) : (
        <>
          <Messages
            profileAvatar={profileAvatar}
            profileClientAvatar={profileClientAvatar}
            showTimeStamp={showTimeStamp}
          />
          <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
          {emojis && pickerStatus && (
            <Picker
              style={{
                position: 'absolute',
                bottom: pickerOffset,
                left: '0',
                width: '100%',
              }}
              data={data}
              onEmojiSelect={onSelectEmoji}
            />
          )}
          <Sender
            ref={senderRef}
            sendMessage={handlerSendMsn}
            placeholder={senderPlaceHolder}
            disabledInput={disabledInput}
            autofocus={autofocus}
            onTextInputChange={onTextInputChange}
            buttonAlt={sendButtonAlt}
            onPressEmoji={togglePicker}
            onChangeSize={setOffset}
          />
        </>
      )}
    </div>
  )
}

export default Conversation
