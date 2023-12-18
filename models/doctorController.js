const Patient = require('../models/patient');

exports.getPatientsList = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json({ patients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientDetails = async (req, res) => {
  try {
    const { patientID } = req.params;
    const patient = await Patient.findOne({ patientID });
    
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json({ patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
