const express = require("express")
const bcrypt = require("bcrypt")
const Joi = require("joi")
const studentModel = require("../model/studentModel")

const studentRouter = express.Router()

const studentValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    course: Joi.string().required(),
    age: Joi.number().required()
})

studentRouter.post("/register", async (req, res) => {
    try {
        const { error } = studentValidation.validate(req.body)

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        const { name, email, password, course, age } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const student = new studentModel({
            name,
            email,
            password: hashedPassword,
            course,
            age
        })

        await student.save()

        res.status(201).json({
            message: "Student registered successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Student registration failed",
            error: error.message
        })
    }
})

module.exports = studentRouter