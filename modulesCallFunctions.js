const {john,peter}= require('./moduleVariables')
const sayHi =  require('./moduleFunctions')
const data = require ('./alternateFlavor')
console.log(data)
require('./7-mindGrenade')


sayHi(john)
sayHi('susan')
sayHi(peter)

