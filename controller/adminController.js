const asyncHandler = require("express-async-handler")
const Attendance = require("../models/Attendance")
const Students = require("../models/Students")
const Batch = require("../models/Batch")

exports.getBatch = asyncHandler(async (req, res) => {
    const result = await Batch.find()
    res.status(200).json({ message: "Batch Fect batch Success", result })
})
exports.addBatch = asyncHandler(async (req, res) => {
    await Batch.create(req.body)
    res.status(200).json({ message: "Batch add   batch Success" })
})
exports.updateBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    await batchId.findByIdUpdate(batchId, req.body, { runValidators: true })
    res.status(200).json({ message: "Batch update batch Success" })
})
exports.deleteBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdDelete(batchId)
    res.status(200).json({ message: "Batch delete batch Success" })
})

//student
exports.getStudent = asyncHandler(async (req, res) => {
    const result = await Students.find()
    res.status(200).json({ message: "Batch Fect student Success", result })
})
exports.getStudentByBtach = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    const result = await Students.find({ batchId })
    res.status(200).json({ message: " Batch  wise studentFect student Success", result })
})



exports.addStudent = asyncHandler(async (req, res) => {
    await Students.create(req.body)
    res.status(200).json({ message: "Batch  student add Success" })
})
exports.updatestudent = asyncHandler(async (req, res) => {
    const { studentId } = req.params
    await Students.findByIdUpdate(studentId, req.body, { runValidators: true })
    res.status(200).json({ message: "Batch studnt uodate Success" })
})
exports.deletestudent = asyncHandler(async (req, res) => {
    const { studentId } = req.params
    await Students.findByIdDelete(studentId)
    res.status(200).json({ message: "Batch sutent delete Success" })
})

//Attendance
exports.getAttendance = asyncHandler(async (req, res) => {
    const { studId } = req.params
    const result = await Attendance.find(studId)
    res.status(200).json({ message: "Batch Fect Attendance Success", result })
})
exports.addAttendance = asyncHandler(async (req, res) => {
    const x = req.body.map(item => {
        return { studId: item.studId, date: item.date, isPresent: item.isPresent }
    })

    const result = await Attendance.findOne({ studId: x[0].studId, date: x[0].date })
    if (result) {
        return res.status(400).json({ message: "Duplicate Attendance" })
    }
    await Attendance.create(x)
    // await Attendance.create(req.body)
    res.status(200).json({ message: "Batch  Attendance add Success" })
})
exports.updateattendance = asyncHandler(async (req, res) => {
    const { attendanceId } = req.params
    await Attendance.findByIdUpdate(attendanceId, req.body, { runValidators: true })
    res.status(200).json({ message: "Batch Attendance uodate Success" })
})
exports.deleteattendance = asyncHandler(async (req, res) => {
    // const { attendanceId } = req.params

    // await Attendance.findByIdDelete(attendanceId)
    await Attendance.deleteMany()
    res.status(200).json({ message: "Batch Attendance delete Success" })
})