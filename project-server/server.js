const express = require("express");
const cors = require("cors"); 
const Database = require("better-sqlite3");

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

const db = new Database("../company.db");

app.get("/api/v1.0/computers", (req, res) => {
    const computers = db.prepare("SELECT * FROM Computer").all();
    res.json(computers);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});