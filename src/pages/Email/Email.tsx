import { Fragment, createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmailContent from './EmailContent'
import EmailList from './EmailList'
import Category from './Category'
import { Message, categoryParams } from 'src/types/EmailData.type'
import { fetchMessages } from 'src/data/parsedData'
import { MailContext } from 'src/context/MailAppProvider'

function EmailSidebar() {
  return (
    <Fragment>
      <Category name='inbox' />
      <Category name='sent' />
      <Category name='reminder' />
      <Category name='spam' />
      <Category name='favorite' />
      <Category name='junks' />
      <Category name='drafts' />
    </Fragment>
  )
}

export const MessagesContext = createContext({} as MessagesContextInterface)

interface MessagesContextInterface {
  filterMessages: Message[] | null
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  params: categoryParams
}

function EmailBody() {
  const [messages, setMessages] = useState({} as Message[])
  const { setLsData, lsData } = useContext(MailContext)

  const params = useParams() as unknown as categoryParams
  console.log(params)
  const category = params.category
  const filterMessages =
    Object.keys(messages).length !== 0 ? messages.filter((message) => message.folder === category) : null

  // Vì số lượng file messages không quá nhiều và offline nên em tạm gọi hết ra ạ
  // Nếu fetch từ API thì nên nên chỉ fetch theo những category được kích hoạt riêng
  useEffect(() => {
    if (!lsData.messages) {
      console.log(lsData.messages)
      ;(async () => {
        try {
          const messages = await fetchMessages()
          setMessages(messages)
        } catch (error) {
          console.log(error)
        }
      })()
    } else {
      setMessages(lsData.messages)
    }
  }, [])

  useEffect(() => {
    console.log('save ms to ls')
    setLsData({
      ...lsData,
      messages: messages
    })
  }, [messages])

  const messagesContextValues = { filterMessages, setMessages, params }

  // console.log(messages)

  return (
    <MessagesContext.Provider value={messagesContextValues}>
      <div className='flex h-full'>
        <div className='w-1/4 border-r border-r-gray-300'>
          <EmailList />
        </div>
        <div className='w-3/4'>
          <EmailContent />
        </div>
      </div>
    </MessagesContext.Provider>
  )
}

const Email = {
  Sidebar: EmailSidebar,
  Body: EmailBody
}

export default Email
