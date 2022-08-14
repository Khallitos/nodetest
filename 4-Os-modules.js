///////////////////////os////////////////////////////

const os = require('os')

// info about user

const user = os.userInfo()

console.log(user)



//uptime

console.log(`The system up time is ${os.uptime()} seconds`)


const currentOs = {
 name:os.type(),
 release:os.release(),
 totalMem:os.totalmem(),
 freeMem:os.freemem()
}
 console.log(currentOs)

