# Take-home Mini Project

## Summary:

Please implement a single-page web application that allows a user to take a test with 4 true/false questions. Only one question should be made visible to the user at a time. Results can be stored on the client; server-side code is not necessary. Examples of JSON for questions and answers have been included below. Feel free to implement as many or as few of the requirements as you’d like.

<pre>
{
    "questions": [
        { "id": 1, "text": "Tim Berners-Lee invented the Internet."},
        { "id": 2, "text": "Dogs are better than cats."},
        { "id": 3, "text": "Winter is coming."},
        { "id": 4, "text": "Internet Explorer is the most advanced browser on Earth."}
    ]
}
</pre>
<pre>
{
    "answers": [
        { "id": 1, "selected": true},
        { "id": 2, "selected": false},
        { "id": 3, "selected": true},
        { "id": 4, "selected": false}
    ]
}
</pre>

## Requirements:
- Single-page application
- CoffeeScript with Backbone or Angular
- HTML
- CSS

## Bonus:
- Require.js
- Mustache.js
- Grunt build
- Stylus
- Source in a GitHub repository

## Questions:
Email Brice Ruth: bruth@flexion.us


## How to run this app:
You need to run following commands to run this application:-
1. bower install
2. npm install
3. grunt serve



