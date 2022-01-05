const questions = require("../Questions.json")
const _ = require('lodash')

module.exports = class QuestionService {
     getQuestions() {
        const PERCENTAGE_EASY = 20
        const PERCENTAGE_MEDIUM = 50
        const PERCENTAGE_HARD = 30
        const easyQuestions = _.sampleSize(questions.filter((question) => question.difficulty === 'Easy'), parseInt(PERCENTAGE_EASY /  5) )
        const mediumQuestions = _.sampleSize(questions.filter((question) => question.difficulty === 'Medium'), parseInt(PERCENTAGE_MEDIUM /  10) )
        const hardQuestions = _.sampleSize(questions.filter((question) => question.difficulty === 'Hard'), parseInt(PERCENTAGE_HARD /  15) )
        const generatedQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions]
        return generatedQuestions
    }
}


