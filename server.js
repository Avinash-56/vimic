const express = require("express");
const app = express();

const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("API running");
});

app.use(express.json({ extended: false }));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/users", require("./api/users"));
// app.use("/api/profile", require("./api/profile"));
// app.use("/api/content", require("./api/content"));
