
const router=require("express").Router({mergeParams:true});
const appController=require("../controllers/app")
const loginController=require("../controllers/login")
const registerController=require("../controllers/register")

router.use(appController);
router.use(loginController);
router.use(registerController);

module.exports=router;