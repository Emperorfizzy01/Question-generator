const express = require('express')
const QuestionService = require("../services/question.service")
const router = express.Router();

const getAllQuestions =  new QuestionService().getQuestions()



module.exports = router
