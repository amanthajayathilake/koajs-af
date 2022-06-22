const Router = require("koa-router");
const router = new Router();
const { getStudents, addStudent } = require("../controllers/studentController.js");

router.get("/students", getStudents);
router.post("/students", addStudent);

module.exports = router;
