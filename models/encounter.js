const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: { type: String, required: true }, // Change the type to String
  date: { type: Date, required: true },
  type: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'], required: true },
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
