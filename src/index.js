const express = require("express");
const app = express();

app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/sum", (req, res) => {
  try {
    const { a, b } = req.body;

    if (typeof a !== "number" || typeof b !== "number") {
      return res.status(400).json({ error: "a va b number bo‘lishi kerak" });
    }
    const result = a + b;

    res.status(200).json({
      status: "Success",
      message: `a va b summasi: ${result} `,
      result,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});
module.exports = { app };
