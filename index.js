const express = require('express');

const app = express();

app.get(['/','/index'],function handleRoot(request,response) {
    response.status(200).send('<h1> Hello in our first REST API. </h1>')
});

app.post('/',function (request,response) {
    response.status(200).send('<h1> Hello in our first REST API with Post</h1>')
});

app.put('/',(request,response) => {
    response.status(200).send('<h1> Hello in our first REST API with Put</h1>')
});

app.listen(3000,function success() {
    console.log('Running on 3000');
});