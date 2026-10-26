const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post("/post",userController.userPost);
router.get("/get",userController.userGet);
router.delete("/delete/:id",userController.userDelete);
router.put('/put/:id',userController.userUpdate);

module.exports = router;

