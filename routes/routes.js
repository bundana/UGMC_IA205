const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const Encounter = require('../models/encounter');
const Vitals = require('../models/vitals');

// Register a new patient
router.post('/patients/register', async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.json({ message: 'Patient registered successfully', data: patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start a new encounter for a patient
router.post('/encounters/start', async (req, res) => {
  try {
    const encounter = await Encounter.create(req.body);
    res.json({ message: 'Encounter started successfully', data: encounter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit vitals for an encounter
router.post('/vitals/submit', async (req, res) => {
  try {
    const vitals = await Vitals.create(req.body);
    res.json({ message: 'Vitals submitted successfully', data: vitals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
