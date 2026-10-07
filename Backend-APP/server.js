const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const filePath = path.join(__dirname, "Users", "users.json");

  let users = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");

    if (data) {
      users = JSON.parse(data);
    }
  }

  const newUser = {
    name,
    email,
    password,
  };

  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(201).json({
    message: "User registered successfully",
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const filePath = path.join(__dirname, "Users", "users.json");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      message: "No users found",
    });
  }

  const data = fs.readFileSync(filePath, "utf-8");
  const users = data ? JSON.parse(data) : [];

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  res.status(200).json({
    message: "Login successful",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

app.listen(PORT, () => {
  console.log("server is running");
});
