import Widget, { WidgetProps } from '@/components/Widget'
import { ElementType } from 'react'
import store from 'redux/store'
import {
  addNewUserMessage,
  addNewResponseMessage,
  addNewLinkSnippet,
  addComponentMessage,
  dropMessage,
  deleteMessages,
  markAllRead,
  setBadgeCount,
} from 'redux/slices/messagesSlice'

import {
  toggleChat,
  toggleInputDissabled,
  toggleMessageLoader,
} from 'redux/slices/behaviorSlice'

import { setQuickButtons } from 'redux/slices/quickButtonSlice'
import { ADD_COMPONENT_MESSAGE, RenderCustomComponent } from '@/types/ActionTypes'

type Props = WidgetProps & typeof defaultProps

function ChatWidget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  fullScreenMode,
  autofocus,
  profileAvatar,
  profileClientAvatar,
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
  showStartScreen,
  startScreen
}: Props) {
  return (
    <Widget
      title={title}
      titleAvatar={titleAvatar}
      subtitle={subtitle}
      handleNewUserMessage={handleNewUserMessage}
      handleQuickButtonClicked={handleQuickButtonClicked}
      senderPlaceHolder={senderPlaceHolder}
      profileAvatar={profileAvatar}
      profileClientAvatar={profileClientAvatar}
      showCloseButton={showCloseButton}
      fullScreenMode={fullScreenMode}
      autofocus={autofocus}
      customLauncher={customLauncher}
      handleTextInputChange={handleTextInputChange}
      chatId={chatId}
      handleToggle={handleToggle}
      launcherOpenLabel={launcherOpenLabel}
      launcherCloseLabel={launcherCloseLabel}
      launcherCloseImg={launcherCloseImg}
      launcherOpenImg={launcherOpenImg}
      sendButtonAlt={sendButtonAlt}
      showTimeStamp={showTimeStamp}
      imagePreview={imagePreview}
      zoomStep={zoomStep}
      handleSubmit={handleSubmit}
      showBadge={showBadge}
      resizable={resizable}
      emojis={emojis}
      showStartScreen={showStartScreen}
      startScreen={startScreen}
    />
  )
}

const defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  autofocus: true,
  chatId: 'rcw-chat-container',
  launcherOpenLabel: 'Open chat',
  launcherCloseLabel: 'Close chat',
  launcherOpenImg: '',
  launcherCloseImg: '',
  sendButtonAlt: 'Send',
  showTimeStamp: true,
  imagePreview: false,
  zoomStep: 80,
  showBadge: true,
}
ChatWidget.defaultProps = defaultProps

function renderCustomComponent(
  component: ElementType,
  props: any,
  showAvatar: boolean,
  id?: string,
): RenderCustomComponent {
  return {
    type: ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar,
    id,
  }
}

function isWidgetOpened(): boolean {
  return store.getState().behavior.showChat
}


export {
  ChatWidget,
  addNewUserMessage as addUserMessage,
  addNewResponseMessage as addResponseMessage,
  addNewLinkSnippet as addLinkSnippet,
  renderCustomComponent,
  toggleChat as toggleWidget,
  toggleInputDissabled,
  toggleMessageLoader as toggleMsgLoader,
  dropMessage as dropMessages,
  isWidgetOpened,
  setQuickButtons,
  deleteMessages,
  markAllRead as markAllAsRead,
  setBadgeCount,
  addComponentMessage
}
