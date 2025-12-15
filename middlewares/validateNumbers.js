export default function validateNumbers(items) {
  return (req, res, next) => {
    for (const item of items) {
      if (typeof req.body[item] !== "number") {
        return res.status(400).json({
          errorMsg: `${item} debe ser un número`
        });
      }
    }
    next();
  };
}


