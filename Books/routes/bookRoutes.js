import express from "express";
import {
  getBooks,
  searchBooks,
  createBook
} from "../controllers/bookController.js";
import validateYear from "../middleware/validateYear.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/search", searchBooks);
router.post("/", validateYear, createBook);

export default router;
