import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
