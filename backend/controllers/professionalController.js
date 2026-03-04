const Professional = require('../db/professionalModel');

const getProfessionalData = async (req, res) => {
  try {
    // Assuming there is only one professional in DB
    const professional = await Professional.findOne();
    if (!professional) {
      return res.status(404).json({ message: 'Professional not found' });
    }
    res.json(professional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfessionalData };