// Usual packages plus socket.io setup documentation
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const PORT = 3001;

//Middleware Setup
app.use(cors());


// Routes
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});