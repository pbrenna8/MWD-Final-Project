// node api to add events to google calendar 

const { google } = require('googleapis')


//authenticating user login 
const {OAuth2} = google.auth 

//google account key 
const oAuth2Client = new OAuth2(
    '131556609244-k6sf832q4g4uthguean64k13v4dcj7n9.apps.googleusercontent.com', 
    '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'
)

oAuth2Client.setCredentials({refresh_token: 
    '1//04ZFixu2TC1pQCgYIARAAGAQSNwF-L9IrXOtSn-QWcBiSp47DhpR3HPc2oojzdGLUZDCh94njJr2j5SC0bXV934X5EThgiQw7ie0', 

})

const calendar = google.calendar({version: 'v3', auth: oAuth2Client })

// setting time for event
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 20)

// setting end time for event 
const eventEndTime = new Date() 
eventEndTime.setDate(eventEndTime.getDay() + 20) 
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45) 

// setting event details 
const event = {
    summary: 'Glamping Project Meeting', 
    location: 'Moose Krause Cir, Notre Dame, IN 46556', 
    description: 'Project meeting to discuss progress', 
    start: {
        dateTime: eventStartTime, 
        timeZone: 'America/New_York', 
    }, 
    end: { 
        dateTime: eventEndTime, 
        timeZone: 'America/New_York', 
    }, 
    colorId: 1, 
}


// accesses personal google calendar to check avalability at given time 
calendar.freebusy.query({
    resource: { 
        timeMin: eventStartTime, 
        timeMax: eventEndTime, 
        timeZone: 'America/New_York', 
        items: [{id: 'primary' }]
    }, 

}, (err, res)  => {
    if(err) return console.error('Free Busy Query: ', err) 
        const eventsArr = res.data.calendars.primary.busy
        if(eventsArr.length === 0) 
            return calendar.events.insert(
                { calendarId: 'primary', resource: event},
                err => { 
                    if (err) return console.error('Calendar Event Creation Error: ', err) 

                    return console.log('Project Meeting Added to Calendar!')
                } 

            )
            return console.log('Sorry I am busy at that time') 
        }

)