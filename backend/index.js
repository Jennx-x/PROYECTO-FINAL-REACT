const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const witheList = ["http://localhost:3000"];

app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      if (witheList.indexOf(origin) !== -1) {
        callback(false, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.listen(port, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
