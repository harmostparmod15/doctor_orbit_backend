const validRequest = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.speciality ||
    !req.body.fees ||
    !req.body.description ||
    !req.body.rating ||
    !req.body.address
  ) {
    return res.status(404).json({
      data: {},
      success: false,
      message: "bad request , missing parameters",
      error: "missing essentail arguments",
    });
  } else next();
};

module.exports = { validRequest };
