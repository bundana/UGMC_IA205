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

// Fetch a list of all patients
router.get('/patients', async (req, res) => {
 try {
   const patients = await Patient.find();
   res.json({ patients });
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

// Fetch details of a specific patient by ID
router.get('/patients/:id', async (req, res) => {
 const patientId = req.params.id;

 try {
   const patient = await Patient.findById(patientId);
   if (!patient) {
     return res.status(404).json({ message: 'Patient not found' });
   }

   // Fetch encounters for the patient
   const encounters = await Encounter.find({ patientID: patientId });
   
   // Fetch vitals for each encounter
   const vitalsPromises = encounters.map(async (encounter) => {
     const vitals = await Vitals.findOne({ encounterID: encounter._id });
     return { encounter, vitals };
   });

   const patientDetails = await Promise.all(vitalsPromises);

   res.json({ patientDetails });
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});
module.exports = router;
