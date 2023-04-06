const express = require('express');

const router = express.Router();
router.get('/',(req,res)=>{
    res.send('olá mundo');
});

const app = express();
app.use('/', router);

module.exports = app;