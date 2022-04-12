const {google } = require('googleapis')

const {OAuth2} = google.auth 

const oAuth2Client = new OAuth2(
    '131556609244-k6sf832q4g4uthguean64k13v4dcj7n9.apps.googleusercontent.com', 
    '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'
)

oAuth2Client.setCredentials({refresh_token: 
    '1//04ZFixu2TC1pQCgYIARAAGAQSNwF-L9IrXOtSn-QWcBiSp47DhpR3HPc2oojzdGLUZDCh94njJr2j5SC0bXV934X5EThgiQw7ie0', 

})

const calendar = google.calendar({version: 'v3', auth: oAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay + 2)

const eventEndTime = new Date() 
eventEndTime.setDate(eventEndTime.getDay() + 2) 
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45) 

const event = {
    summary: 'General Meeting', 
    location: 'Moose Krause Cir, Notre Dame, IN 46556', 
    description: 'General meeting to discuss all projects', 
    start: {
        dateTime: eventStartTime, 
        timeZone: 'America/new_york', 
    }, 
    end: { 
        dateTime: eventEndTime, 
        timeZone: 'America/new_york', 
    }, 
    colorId: 1, 
}

calendar.freebusy.query({
    resource: { 
        timeMin: eventStartTime, 
        timeMax: eventEndTime, 
        timeZone: 'America/new_york'
    }, 

}, (err, res)  => {})