import format from 'date-fns/format'
import markdownIt from 'markdown-it'
// @ts-ignore
import markdownItSup from 'markdown-it-sup'
// @ts-ignore
import markdownItSanitizer from 'markdown-it-sanitizer'
// @ts-ignore
import markdownItClass from '@toycode/markdown-it-class'
// @ts-ignore
import markdownItLinkAttributes from 'markdown-it-link-attributes'

import { MessageTypes } from '@/types/StoreTypes'

import './styles.scss'

type Props = {
  message: MessageTypes
  showTimeStamp: boolean
}

function Message({ message, showTimeStamp }: Props) {
  const sanitizedHTML = markdownIt()
    .use(markdownItClass, {
      img: ['rcw-message-img']
    })
    .use(markdownItSup)
    .use(markdownItSanitizer)
    .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
    .render(message.text);

  return (
    <div className={`rcw-${message.sender}`}>
      <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML.replace(/\n$/,'') }} /> 

      {showTimeStamp && (
        <span className="rcw-timestamp">
          {format(message.timestamp, 'hh:mm')}
        </span>
      )}
    </div>
  )
}

export default Message
