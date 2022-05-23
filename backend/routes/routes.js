const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const articleTemplateCopy = require('../models/articleModels');

router.post('/submit', (request, response) => {
    //request the data via post
    const articleSubmit = new articleTemplateCopy({
        title: request.body.title,
        author: request.body.author,
        year: request.body.year,
        source: request.body.source,
        url: request.body.url,
    })
    articleSubmit.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error);
    })
})

module.exports = router 