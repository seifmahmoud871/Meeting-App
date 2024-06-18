import http from 'http'
import { connectDB } from "../DB/connection.js";
import meetingRouter from "./modules/meeting/meeting.router.js"
import initMeetingServer from './meeting-server.js';

const initApp = (app, express) => {
  

  const server = http.createServer(app);
  initMeetingServer(server);
  app.use(express.json({}));
  app.get("/", (req, res, next) => {
    return res.status(200).json({ message: "Welcome to meeting video call app" });
  });
  app.use("/api", meetingRouter);


  app.all("*", (req, res, next) => {
    return res.json({ message: "In-valid routing" });
  });
  connectDB();
};
export default initApp;
