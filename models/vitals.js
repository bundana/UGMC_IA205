const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  encounterID: { type: mongoose.Schema.Types.ObjectId, ref: 'Encounter', required: true },
  bloodPressure: { type: String },
  temperature: { type: String },
  pulse: { type: String },
  spO2: { type: String },
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
