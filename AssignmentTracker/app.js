const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const assignmentRoutes = require('./routes/assignments');
require('./config');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/assignments', assignmentRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
