const express = require("express")
const bcrypt = require("bcrypt")
const Joi = require("joi")
const teacherModel = require("../model/teacherModel")

const teacherRouter = express.Router()

const teacherValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    subject: Joi.string().required()
})

teacherRouter.post("/register", async (req, res) => {
    try {
        const { error } = teacherValidation.validate(req.body)

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        const { name, email, password, subject } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const teacher = new teacherModel({
            name,
            email,
            password: hashedPassword,
            subject
        })

        await teacher.save()

        res.status(201).json({
            message: "Teacher registered successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Teacher registration failed",
            error: error.message
        })
    }
})

module.exports = teacherRouter