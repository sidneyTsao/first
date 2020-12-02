const request = require('request')
request({ url: 'https://ithelp.ithome.com.tw/articles/10186584',
json: true
}, (error, response, body) => {
console.log(body)  
//console.log(JSON.stringify(body, null, 2))
})