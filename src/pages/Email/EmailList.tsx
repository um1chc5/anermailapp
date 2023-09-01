import { useContext } from 'react'
import EmailSummary from './EmailSummary'
import { MessagesContext } from './Email'

function EmailList() {
  const { params, filterMessages: messages } = useContext(MessagesContext)
  const category = params.category

  return !category ? (
    <div className='flex h-full w-full items-center justify-center md:px-5 lg:px-8'>
      <h2 className='text-center text-3xl'>Please choose a folder</h2>
    </div>
  ) : (
    <div className='h-full overflow-y-scroll'>
      <ul>{messages && messages.map((message, index) => <EmailSummary message={message} key={index} />)}</ul>
    </div>
  )
}

export default EmailList
