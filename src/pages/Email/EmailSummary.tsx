import classNames from 'classnames'
import { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { dateFormat } from 'src/utils/Format'
import { MessagesContext } from './Email'
import { Message } from 'src/types/EmailData.type'

function EmailSummary({ message }: { message: Message }) {
  const { setMessages, params } = useContext(MessagesContext)
  const emailReadHanlde = (readedId: string) => () => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === readedId) {
          message.unread = false
        }
        return message
      })
    )
  }

  const isActive = message.id === params.emailId

  return (
    <Fragment>
      <NavLink
        to={`${params.category}/${message.id}`}
        className={classNames('flex gap-2 border-b border-gray-300 p-4 text-sm', {
          'bg-gray-200': message.unread,
          'bg-blue-500 text-white': isActive
        })}
        onClick={emailReadHanlde(message.id)}
      >
        <div className='flex w-1/5 flex-col items-center'>
          <img src={message.from.avatarUrl} alt='avatar' className='w-10 rounded-full' />
        </div>
        <div className='w-4/5'>
          <div
            className={classNames('flex justify-between font-medium text-gray-500', {
              'text-white': isActive
            })}
          >
            <p>{message.from.name}</p>
            <p>{dateFormat(message.timestamp)}</p>
          </div>
          <h4 className='line-clamp-1 text-base font-bold'>{message.main.title}</h4>
          <p
            className={classNames('line-clamp-3 text-gray-500', {
              'text-white': isActive
            })}
          >
            {message.main.content}
          </p>
        </div>
      </NavLink>
    </Fragment>
  )
}

export default EmailSummary
