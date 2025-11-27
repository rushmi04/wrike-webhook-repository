app.post("/wrike-webhook", async (req, res) => {
    console.log("🔔 Received webhook from Wrike:");
    const payload = req.body;

    const message = {
        text: "🔔 *Wrike Update Received!*",
        card: {
            theme: "modern",
            title: "WrikePulseBot – Realtime Update",
            description: "Your Wrike workspace just triggered an event.",
            sections: [
                {
                    title: "Event Payload",
                    elements: [
                        { type: "text", text: "```" + JSON.stringify(payload, null, 2) + "```" }
                    ]
                }
            ]
        }
    };

    try {
        await fetch("https://cliq.zoho.com/api/v2/bots/wrikepulsebot0/incoming", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
        });

        console.log("📨 Sent successfully to WRIKE PULSE BOT");
    } catch (error) {
        console.error("❌ Failed to send to bot:", error);
    }

    res.status(200).send("OK");
});
