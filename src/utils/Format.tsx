function padStart(value: number, length: number, padChar: string) {
  const str = String(value)
  if (str.length >= length) {
    return str
  }
  return Array(length - str.length + 1).join(padChar) + str
}

export function timeFormat(timestamp: string) {
  const date = new Date(timestamp)

  const hours = padStart(date.getHours(), 2, '0')
  const minutes = padStart(date.getMinutes(), 2, '0')
  const seconds = padStart(date.getSeconds(), 2, '0')

  const day = padStart(date.getDate(), 2, '0')
  const month = padStart(date.getMonth() + 1, 2, '0')
  const year = date.getFullYear()

  return `${hours}:${minutes}:${seconds} ${month}/${day}/${year}`
}

export function dateFormat(timestamp: string) {
  const date = new Date(timestamp)

  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()

  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}
