const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

app.use(express.json({ extended: false }));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", require("./api/users"));
app.use("/api/profile", require("./api/profile"));
app.use("/api/posts", require("./api/post"));

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});
