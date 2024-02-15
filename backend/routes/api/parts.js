const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Part = mongoose.model('Part');

// POST /api/parts/create
router.post('/create', async (req, res, next) => {
    const inputs = req.body;
    const customerRFQLI = inputs.customerRFQLI;
    const customerRFQPN = inputs.customerRFQPN;

    const part = new Part({
        customerRFQLI: customerRFQLI, 
        customerRFQPN: customerRFQPN
    });

    const savedPart = await part.save();

    return res.json(savedPart);

    // const level = inputs.difficulty;
    // const topic = inputs.topic;
    // const userId = inputs.userId;
    // const openAIQuiz = await openAI.getquiz(topic, level);
    // const rawQuiz = JSON.parse(openAIQuiz.message.content);

    // rawQuiz.user = userId;
    // rawQuiz.attempts = 0;
    // rawQuiz.difficulty = level;
    // const coverURL = await openAI.getCoverImage(topic);
    // rawQuiz.coverUrl = coverURL

    // const formattedQuiz = new Quiz(rawQuiz);

    // const quiz = await formattedQuiz.save();

    // const quizzesList = {};
    // const questionsList = {};
    // const response = {};
    // const questionIds = [];

    // quiz.questionsArray.forEach((question) => {
    //     questionIds.push(question._id)
    //     questionsList[question._id] = {
    //         _id: question._id,
    //         question: question.question,
    //         options: question.options,
    //         answer: question.answer,
    //         response: question.response
    //     }
    // })

    // quizzesList[quiz._id] = {
    //     _id: quiz._id,
    //     title: quiz.title,
    //     user: quiz.user,
    //     questions: questionIds,
    //     coverURL: quiz.coverUrl

    // }

    // response.quizzes = quizzesList;
    // response.questions = questionsList;

    // return res.json(response)
});

module.exports = router;
