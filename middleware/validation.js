const validateUserInput = (req, res, next) => {
    const { phoneNumber } = req.body;
  
    if (!phoneNumber) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (typeof age !== "number" || age < 0) {
      return res.status(400).json({ message: "Age must be a valid number." });
    }
  
    next();
  };
  
  module.exports = { validateUserInput };