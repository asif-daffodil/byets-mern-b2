const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


const apiRouter = require('./router/api');
app.use('/api', apiRouter);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
