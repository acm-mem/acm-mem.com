require('dotenv').config();

const express = require('express');
const app = express();
const twitter = require('twitter');


const client = new twitter({
    consumer_key: process.env.TWIT_CONSUMER_KEY,
    consumer_secret: process.env.TWIT_CONSUMER_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_SECRET,
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/api/news', function(req, res) {
    res.end(JSON.stringify(client.get('statuses/user_timeline', {screen_name: 'ACM_UofM', count: 1})));
});

app.listen(3005);