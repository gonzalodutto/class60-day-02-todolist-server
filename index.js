const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.get("/usersss", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get("/", async (req, res) => {
  res.send("Hello from server");
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
