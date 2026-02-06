import express from "express";
import methodOverride from "method-override";

const app = express();
const PORT = 3000;

// MIDDLEWARE 

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Response Time Logger (Q2)
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${time}ms`);
  });

  next();
});

//SAMPLE DATA 

let userData = [
  { id: 1, name: "Mayank", age: 20 },
  { id: 2, name: "Manish", age: 22 },
  { id: 3, name: "Rohit", age: 19 }
];

let posts = [
  { id: 1, title: "First Post", content: "Hello World" }
];

//USERS FILTER WITH QUERY PARAM

app.get("/users", (req, res) => {
  const { name } = req.query;

  let filtered = userData;

  if (name) {
    filtered = userData.filter(u =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.render("users", { users: filtered });
});

//CONTACT FORM (GET + POST)

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const { name, message } = req.body;
  console.log("Contact Form:", name, message);
  res.send("Form submitted successfully!");
});

//PHOTO GALLERY

app.get("/gallery", (req, res) => {
  const images = ["1.jpg", "2.jpg", "3.jpg"];
  res.render("gallery", { images });
});

//SIMPLE BLOG

//List posts
app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

//New post form
app.get("/posts/new", (req, res) => {
  res.render("newPost");
});

//Create post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);
  res.redirect("/posts");
});

//View single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) return res.status(404).render("404");

  res.render("post", { post });
});

//CUSTOM 404 PAGE

app.use((req, res) => {
  res.status(404).render("404");
});

//SERVER

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
