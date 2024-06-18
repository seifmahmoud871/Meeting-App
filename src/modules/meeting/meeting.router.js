import { Router } from "express";
import * as meetingController from "./controller/meeting.js"


const router = Router();


router.post("/meeting/start",meetingController.startMeeting)
router.get("/meeting/join",meetingController.checkMeetingExists)
router.get("/meeting/get",meetingController.getAllMeetingUsers)




export default router;