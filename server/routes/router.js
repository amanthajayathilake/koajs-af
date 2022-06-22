const Router = require("koa-router");
const router = new Router();
const { getStudents, addStudent, getStudent, updateStudent, deleteStudent } = require("../controllers/studentController.js");

router.get("/students", getStudents);
router.post("/students", addStudent);
router.get("/students/:id", getStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
