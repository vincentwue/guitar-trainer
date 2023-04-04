const express = require('express');
const path = require('path');
const app = express();

const port = 8004

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Client hosted on port ${port}: ` + "http://localhost:8004/")

})

