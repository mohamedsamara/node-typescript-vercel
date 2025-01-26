import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
