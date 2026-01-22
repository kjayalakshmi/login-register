const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Register Route (Fixed)
app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(500).json({ error: err.message }));
});

// ✅ Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (!user) return res.status(404).json("User not found");

      if (user.password === password) {
        res.json("success");
      } else {
        res.status(401).json("Password incorrect");
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// ✅ Start Server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
