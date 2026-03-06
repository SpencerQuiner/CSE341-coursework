const { getDB } = require('../db/index');

const getProfessionalData = async (req, res) => {
  try {
    const db = getDB();

    const professional = await db
      .collection('professionals')
      .findOne({});

    if (!professional) {
      return res.status(404).json({ message: 'Professionals not found' });
    }

    res.json(professional);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfessionalData };