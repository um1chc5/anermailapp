export interface categoryParams {
  category: string
  emailId: string
}

export interface EmailUser {
  email: string
  password: string
  name: string
  avatarUrl: string
}


export interface Message {
  id: string
  folder: string
  from: From
  to: To
  timestamp: string
  main: Main
  unread: boolean
}

export interface From {
  email: string
  name: string
  avatarUrl: string
}

export interface To {
  email: string
  name: string
  avatarUrl: string
}

export interface Main {
  title: string
  content: string
}
