import authors from "../data/authors.js";

/* GET ALL */
export const getAuthors = (req, res) => {
  res.json(authors);
};

/* GET ONE */
export const getAuthorById = (req, res) => {
  const author = authors.find(a => a.id === Number(req.params.id));

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  res.json(author);
};

/* CREATE */
export const createAuthor = (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

/* UPDATE */
export const updateAuthor = (req, res) => {
  const author = authors.find(a => a.id === Number(req.params.id));

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  author.name = req.body.name;
  res.json(author);
};

/* DELETE */
export const deleteAuthor = (req, res) => {
  const index = authors.findIndex(a => a.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Author not found" });
  }

  authors.splice(index, 1);

  res.json({ message: "Author deleted successfully" });
};
