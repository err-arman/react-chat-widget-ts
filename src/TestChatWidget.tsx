import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  addLinkSnippet,
  addResponseMessage,
  addUserMessage,
  // setQuickButtons,
  // toggleMsgLoader,
  Widget,
} from 'WidgetComponent'

import { setQuickButtons } from 'redux/slices/quickButtonSlice'
import {
  addNewLinkSnippet,
  addNewResponseMessage,
  addNewUserMessage,
} from 'redux/slices/messagesSlice'
import { toggleMessageLoader } from 'redux/slices/behaviorSlice'
import RegisterForm from './components/RegisterForm/RegisterForm'

const TestChatWidget = () => {
  const dispatch = useDispatch()

  const initializeChatWidget = () => {
    dispatch(
      addNewResponseMessage({
        text: 'Welcome to this awesome chat!',
      }),
    )
    dispatch(
      addNewLinkSnippet({
        link: { link: 'https://google.com', title: 'Google' },
      }),
    )
    dispatch(
      addNewResponseMessage({
        text:
          '![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)',
      }),
    )
    dispatch(
      addNewResponseMessage({
        text:
          '![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)',
      }),
    )
  }
  const handleNewUserMessage = (newMessage: any) => {
    dispatch(toggleMessageLoader())
    setTimeout(() => {
      dispatch(toggleMessageLoader())
      if (newMessage === 'fruits') {
        dispatch(
          setQuickButtons({
            buttons: [
              { label: 'Apple', value: 'apple' },
              { label: 'Orange', value: 'orange' },
              { label: 'Pear', value: 'pear' },
              { label: 'Banana', value: 'banana' },
            ],
          }),
        )
      } else {
        dispatch(
          addNewResponseMessage({
            text: newMessage,
          }),
        )
      }
    }, 2000)
  }

  const handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e)
    setQuickButtons([])
  }

  const handleSubmit = (msgText: string) => {
    if (msgText.length < 80) {
      dispatch(
        addNewUserMessage({
          text: 'Uh oh, please write a bit more.',
        }),
      )
      return false
    }
    return true
  }

  return (
    <Widget
      title="Hi there"
      subtitle="How can we help you?"
      senderPlaceHolder="Type message and hit enter"
      handleNewUserMessage={handleNewUserMessage}
      handleQuickButtonClicked={handleQuickButtonClicked}
      imagePreview
      handleSubmit={handleSubmit}
      emojis
      autofocus
      showStartScreen={true}
      startScreen={<RegisterForm />}
    />
  )
}

export default TestChatWidget
