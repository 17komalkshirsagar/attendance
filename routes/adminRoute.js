const { getBatch, addBatch, updateBatch, deleteBatch, getStudent, addStudent, updatestudent, deletestudent, getAttendance, addAttendance, updateattendance,
    deleteattendance, getStudentByBtach } = require("../controller/adminController")

const router = require("express").Router()

router
    .get("/batch", getBatch)
    .post("/batch-add", addBatch)
    .put("/batch-update", updateBatch)
    .delete("/batch-delete", deleteBatch)


router
    .get("/student", getStudent)
    .get("/student-by-batch/:batchID", getStudentByBtach)
    .post("/student-add", addStudent)
    .put("/student-update/:studentId", updatestudent)
    .delete("/student-delete/:studentId", deletestudent)


router
    .get("/attendance/:studId", getAttendance)
    .post("/attendance-add", addAttendance)
    .put("/attendance-update/attendaceId", updateattendance)
    .delete("/attendance-delete", deleteattendance)



module.exports = router


