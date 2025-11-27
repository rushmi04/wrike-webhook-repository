const express = require("express");
const app = express();

app.use(express.json());

// Webhook endpoint Wrike will call
app.post("/wrike-webhook", (req, res) => {
    console.log("🔔 Received webhook from Wrike:");
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send("OK");
});

// Home route (for testing)
app.get("/", (req, res) => {
    res.send("Wrike Webhook Server Running ✔");
});

// Render uses PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("🚀 Server running on port", port));
