export default function validateYear(req, res, next) {
  const { year } = req.body;

  if (year === undefined) return next();

  const currentYear = new Date().getFullYear();

  if (isNaN(year) || year < 1900 || year > currentYear) {
    return res.status(400).json({ error: "Invalid year" });
  }

  next();
}
