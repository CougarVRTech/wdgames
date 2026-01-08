const express = require('express');
const app = express();
const port = 31300;

// Serve all files in the current directory
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
