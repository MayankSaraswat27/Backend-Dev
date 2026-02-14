import books from "../data/books.js";

/* GET ALL BOOKS with filter + pagination */
export const getBooks = (req, res) => {
  let { author, year, page = 1, limit = 10 } = req.query;

  let filtered = books;

  // Filtering
  if (author) {
    filtered = filtered.filter(
      b => b.author.toLowerCase() === author.toLowerCase()
    );
  }

  if (year) {
    filtered = filtered.filter(b => b.year === Number(year));
  }

  // Pagination
  page = Number(page);
  limit = Number(limit);

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = filtered.slice(start, end);

  res.json({
    page,
    limit,
    total: filtered.length,
    data: paginated
  });
};

/* SEARCH BOOK BY TITLE */
export const searchBooks = (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title query required" });
  }

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
};

/* CREATE BOOK */
export const createBook = (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
};
