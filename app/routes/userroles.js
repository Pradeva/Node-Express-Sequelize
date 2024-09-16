const express = require("express");
const userroleController = require("../controllers/userroleController")
const router = express.Router()

router.get("/", userroleController.getAllUserroles)
router.get("/:id", userroleController.getUserroleById)
router.post("/", userroleController.createUserrole)
router.put("/:id", userroleController.updateUserrole)
router.delete("/:id", userroleController.deleteUserrole)

module.exports = router