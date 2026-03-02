const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/data", (req, res) => {
    const data = fs.readFileSync("tom_results.json");
    res.json(JSON.parse(data));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});