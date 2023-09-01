import { ReactNode, createContext, useEffect, useState } from 'react'
import { EmailUser, Message } from '../types/EmailData.type'
import { fetchUsers } from '../data/parsedData'

interface ContextValuesInterface {
  user: EmailUser
  saveDataToLS: typeof saveDataToLS
  lsData: LsDataInterface
  setLsData: React.Dispatch<React.SetStateAction<LsDataInterface>>
}

interface LsDataInterface {
  isLogin: boolean
  messages: Message[]
}

const MailContext = createContext({} as ContextValuesInterface)

const saveDataToLS = (data: LsDataInterface) => {
  localStorage.setItem('mail-app-data', JSON.stringify(data))
}

function MailAppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({} as EmailUser)
  const [lsData, setLsData] = useState({} as LsDataInterface)
  // const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem('mail-app-data')
    if (storedData) {
      const parseData = JSON.parse(storedData)
      console.log(parseData)
      setLsData(parseData)
    }

    ;(async () => {
      try {
        const data = await fetchUsers()
        setUser(data[0])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    saveDataToLS(lsData)
  }, [lsData])

  const mailContextValues = { lsData, setLsData, user, saveDataToLS }

  return <MailContext.Provider value={mailContextValues}>{children}</MailContext.Provider>
}

export { MailAppProvider, MailContext }
