import { useDispatch, useSelector } from 'react-redux'
import { toggleChat } from 'redux/slices/behaviorSlice'
import { addNewUserMessage } from 'redux/slices/messagesSlice'
import store from 'redux/store'
import { AnyFunction } from '@/utils/types'

import WidgetLayout from './layout'

type Props = {
  title: string
  titleAvatar?: string
  subtitle: string
  senderPlaceHolder: string
  profileAvatar?: string
  profileClientAvatar?: string
  showCloseButton: boolean
  fullScreenMode: boolean
  autofocus: boolean
  customLauncher?: AnyFunction
  handleNewUserMessage: AnyFunction
  handleQuickButtonClicked?: AnyFunction
  handleTextInputChange?: (event: any) => void
  chatId: string
  handleToggle?: AnyFunction
  launcherOpenLabel: string
  launcherCloseLabel: string
  launcherOpenImg: string
  launcherCloseImg: string
  sendButtonAlt: string
  showTimeStamp: boolean
  imagePreview?: boolean
  zoomStep?: number
  handleSubmit?: AnyFunction
  showBadge?: boolean
  resizable?: boolean
  emojis?: boolean
}

function Widget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  profileAvatar,
  profileClientAvatar,
  showCloseButton,
  fullScreenMode,
  autofocus,
  customLauncher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  chatId,
  handleToggle,
  launcherOpenLabel,
  launcherCloseLabel,
  launcherCloseImg,
  launcherOpenImg,
  sendButtonAlt,
  showTimeStamp,
  imagePreview,
  zoomStep,
  handleSubmit,
  showBadge,
  resizable,
  emojis,
}: Props) {
  const dispatch = useDispatch()
  const showChat = useSelector((store: any) => store.behavior.showChat)

  const toggleConversation = () => {
    dispatch(toggleChat())
    handleToggle ? handleToggle(showChat) : null
  }

  const handleMessageSubmit = (userInput: any) => {
    if (!userInput.trim()) {
      return
    }

    handleSubmit?.(userInput)
    dispatch(addNewUserMessage({ text: userInput }))
    handleNewUserMessage(userInput)
  }

  const onQuickButtonClicked = (event: any, value: any) => {
    event.preventDefault()
    handleQuickButtonClicked?.(value)
  }

  return (
    <WidgetLayout
      onToggleConversation={toggleConversation}
      onSendMessage={handleMessageSubmit}
      onQuickButtonClicked={onQuickButtonClicked}
      title={title}
      titleAvatar={titleAvatar}
      subtitle={subtitle}
      senderPlaceHolder={senderPlaceHolder}
      profileAvatar={profileAvatar}
      profileClientAvatar={profileClientAvatar}
      showCloseButton={showCloseButton}
      fullScreenMode={fullScreenMode}
      autofocus={autofocus}
      customLauncher={customLauncher}
      onTextInputChange={handleTextInputChange}
      chatId={chatId}
      launcherOpenLabel={launcherOpenLabel}
      launcherCloseLabel={launcherCloseLabel}
      launcherCloseImg={launcherCloseImg}
      launcherOpenImg={launcherOpenImg}
      sendButtonAlt={sendButtonAlt}
      showTimeStamp={showTimeStamp}
      imagePreview={imagePreview}
      zoomStep={zoomStep}
      showBadge={showBadge}
      resizable={resizable}
      emojis={emojis}
    />
  )
}

export default Widget
