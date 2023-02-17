const express = require("express")
const battingController = require("../Controllers/user")
const commnMid = require("../Middleware/Auth")
const Router = express.Router()

Router.post("/user", battingController.createUser)
Router.post("/userlogin", battingController.userLogin)
Router.get("/getUsers", battingController.getUsers)
Router.post("/getContact", battingController.getContact)
Router.post("/updatePassword", battingController.updatePassword)
Router.post("/:userId/bow_batPost", commnMid.jwtValidation, commnMid.authorization, battingController.bow_bat)
Router.post("/:userId/batting", commnMid.jwtValidation, commnMid.authorization, battingController.createBattings)
Router.put("/:userId/updateBatting", commnMid.jwtValidation, commnMid.authorization, battingController.updateBatting)
Router.post("/:userId/bowling", commnMid.jwtValidation, commnMid.authorization, battingController.createBowlings)
Router.put("/:userId/updateBowling", commnMid.jwtValidation, commnMid.authorization, battingController.updateBowling)
Router.post("/:userId/wicketKeeping", commnMid.jwtValidation, commnMid.authorization, battingController.createWickets)
Router.put("/:userId/updateWicket", commnMid.jwtValidation, commnMid.authorization, battingController.updateWicket)
Router.get("/:userId/getPersonal", commnMid.jwtValidation, commnMid.authorization, battingController.getPersonal)
Router.get("/:userId/getProgress", commnMid.jwtValidation, commnMid.authorization, battingController.getProgress)
Router.post("/:userId/postDrills", commnMid.jwtValidation, commnMid.authorization, battingController.createRoutine)
Router.get("/:userId/getRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.getRoutine)
Router.put("/:userId/updateRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.updateRoutine)
Router.delete("/:userId/deleteRoutine", commnMid.jwtValidation, commnMid.authorization, battingController.deleteRoutine)
Router.post("/category", battingController.category)
Router.get("/:userId/Categoy", commnMid.jwtValidation, commnMid.authorization, battingController.getCategory)
Router.post("/tag", battingController.tag)
Router.get("/:userId/Tags", commnMid.jwtValidation, commnMid.authorization, battingController.getTags)
Router.get("/:userId/getMyDrill", commnMid.jwtValidation, commnMid.authorization, battingController.getMyDrills)
Router.put("/:userId/updateDrill", commnMid.jwtValidation, commnMid.authorization, battingController.updateDrill)
Router.post("/:userId/readinessSurvey", commnMid.jwtValidation, commnMid.authorization, battingController.readinessSurvey)
Router.post("/:userId/PowerTest", commnMid.jwtValidation, commnMid.authorization, battingController.createPowerTest)
Router.post("/:userId/StrengthTest", commnMid.jwtValidation, commnMid.authorization, battingController.createStrengthTest)
Router.post("/academy/coach", battingController.createAcademy)
Router.post("/AcademyLogin", battingController.AcademyLogin)
Router.post("/updateCoachPassword", battingController.updateCoachPassword)
Router.post("/getContactCoach", battingController.getContactCoach)
Router.get("/:userId/getPastDrill", commnMid.jwtValidation, commnMid.authorization, battingController.getPastDrill)
Router.get("/:userId/getAssignedBydrills", commnMid.jwtValidation, commnMid.authorization, battingController.getAssignedByDrills)
Router.put("/:userId/updateBat_Bow", commnMid.jwtValidation, commnMid.authorization, battingController.updateBat_Bow)
Router.get("/:userId/getAllUsers", commnMid.jwtValidation, commnMid.authorization, battingController.getAllUsers)

//===================== checking your end point valid or not =======================//
Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
})
module.exports = Router;


