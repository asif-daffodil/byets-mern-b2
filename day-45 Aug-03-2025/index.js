const express = require('express');
const app = express();
const cors = require('cors');

//  cors settings
const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
};

// static public folder
app.use(express.static("public"));

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const apiRouter = require('./router/api');
app.use('/api', apiRouter);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
})