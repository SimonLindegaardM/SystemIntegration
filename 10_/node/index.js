console.log(new Date())

// z i date står for Zulu time

console.log(Date())

console.log(Date.now())

// ISO 8601

const date = new Date()

const danishDate = new Intl.DateTimeFormat("da-dk").format(date)
console.log(danishDate)
const usDate = new Intl.DateTimeFormat("en-us").format(date)
console.log(usDate)