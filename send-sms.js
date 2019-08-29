const accountSid = 'ADD TWILIO ACCOUNT SID HERE'
const authToken = 'ADD TWILIO AUTH TOKEN HERE'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'ADD MESSAGE HERE',
    from: 'ADD TWILIO TRIAL NUMBER HERE', // example format: +15017122661
    to: '[ADD VERIFIED MOBILE NUMBER HERE]' // example format: +15558675310
  })
  .then(message => console.log(message.sid))
