const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vendor_sponsor",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database");
});

// **User Registration**
app.post("ProfessionalNoobs\src\components\auth\RegisterForm.tsx", async (req, res) => {
  const { email, password, name, businessName, phoneNumber, userType } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const sql = "INSERT INTO users (email, password, name, businessName, phoneNumber, userType) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [email, hashedPassword, name, businessName, phoneNumber, userType], (err, result) => {
    if (err) return res.status(500).json({ message: "Error registering user" });
    res.json({ message: "User registered successfully" });
  });
});

// **User Login**
app.post("/ProfessionalNoobs\src\components\auth\LoginForm.tsx", (req, res) => {
  const { email, password } = req.body;
  
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const isValid = await bcrypt.compare(password, results[0].password);
    if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: results[0].id }, "secret_key", { expiresIn: "1h" });
    res.json({ token, userType: results[0].userType });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
