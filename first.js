const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

let quotes= {
    'einstein':'The true sign of intelligence is not knowledge but imagination.',
    'tesla':'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.'
}
app.get('/quotes/:name',(request,response)=> {
    response.status(200).send(quotes[request.params.name]);
});
app.get(['/','/index'],function handleRoot(request,response) {
    response.status(200).send('<h1> Hello in our first REST API. </h1>')
});

app.post('/',function (request,response) {
    response.status(200).send('<h1> Hello in our first REST API with Post</h1>')
});

app.put('/',(request,response) => {
    response.status(200).send('<h1> Hello in our first REST API with Put</h1>')
});

app.delete('/',(request,response) => {
    response.status(200).send('<h1> Hello in our first REST API with Delete</h1>')
});

app.listen(port,function success() {
    console.log(`Running on ${port}`);
});