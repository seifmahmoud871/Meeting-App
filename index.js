import express from 'express'
import initApp from './src/index.router.js'
import initMeetingServer from './src/meeting-server.js'

const app = express()


const port = process.env.PORT || 8000

initApp(app,express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))