const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const app = express();

// GET /
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error("Failed to read index.html:", err);
            return res.status(500).send("Internal Server Error");
        }

        res.type("html").send(data);
    });
});

// GET /message
app.get("/message", (req, res) => {
    console.log("Backend received a request for /message");

    res.json({
        message: "Hello from the Express backend!",
        timestamp: new Date().toISOString(),
    });
});

// 404
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});