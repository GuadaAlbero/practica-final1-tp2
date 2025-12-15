export default function validateRunnerId(req, res, next) {
  const { id } = req.body;

  const regex = /^[A-Za-z0-9]{6}$/;

  if (!id || !regex.test(id)) {
    return res.status(400).json({
      errorMsg: "El id debe tener 6 caracteres alfanuméricos"
    });
  }

  next();
}

