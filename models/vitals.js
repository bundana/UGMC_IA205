const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  encounterID: { type: String, required: true }, // Change the type to String
  bloodPressure: { type: String },
  temperature: { type: String },
  pulse: { type: String },
  spO2: { type: String },
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
