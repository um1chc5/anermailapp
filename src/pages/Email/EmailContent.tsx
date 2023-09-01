import { Fragment, useContext } from 'react'
import { MessagesContext } from './Email'
import { timeFormat } from 'src/utils/Format'

function EmailContent() {
  const { filterMessages: messages, params } = useContext(MessagesContext)
  const catagory = params.category
  const emailId = params.emailId
  const presentMessage = messages?.find((message) => message.id === emailId)

  return !catagory ? (
    <div className='flex h-full w-full items-center justify-center md:px-5 lg:px-8'>
      <h2 className='text-center text-3xl'>Please choose a folder first</h2>
    </div>
  ) : !emailId ? (
    <div className='flex h-full w-full items-center justify-center md:px-5 lg:px-8'>
      <h2 className='text-center text-3xl'>Please choose an email</h2>
    </div>
  ) : (
    <div className='p-8'>
      {presentMessage && (
        <Fragment>
          <div className='flex justify-between'>
            <div className='flex items-center '>
              <img src={presentMessage.from.avatarUrl} alt='avatar' className='h-10 w-10 rounded-full' />
              <div className='ml-3'>
                <p className='font-bold'>{presentMessage.from.name}</p>
                <p className='text-sm font-light text-gray-600'>{presentMessage.from.email}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='mr-2 text-sm font-light text-gray-600'>{timeFormat(presentMessage.timestamp)}</p>
              <button className='mx-1 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md'>Reply</button>
              <button className='mx-1 rounded-md border border-green-600 px-4 py-2 text-green-600 shadow-md '>
                Foward
              </button>
              <button className='mx-1 rounded-md border border-red-600 px-4 py-2 text-red-600 shadow-md '>
                Delete
              </button>
            </div>
          </div>
          <h1 className='py-10 text-4xl font-semibold'>{presentMessage.main.title}</h1>
          <p className='mb-8 text-justify'>{presentMessage.main.content}</p>
          <hr></hr>
        </Fragment>
      )}
    </div>
  )
}

export default EmailContent
