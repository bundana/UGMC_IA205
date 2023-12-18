# Register a new patient
curl -X POST -H "Content-Type: application/json" -d '{"patientID":"P001","surname":"Doe","othernames":"John","gender":"Male","phoneNumber":"123456789","residentialAddress":"123 Main Street","emergencyContact":{"name":"Emergency Contact Name","phone":"987654321","relationship":"Relation"}}' http://localhost:3000/api/patients/register

# Retrieve the patient ID from the response or from MongoDB directly

# Start a new encounter
curl -X POST -H "Content-Type: application/json" -d '{"patientID":"P001","date":"2023-01-01T12:00:00.000Z","type":"OPD"}' http://localhost:3000/api/encounters/start

# Submit vitals
curl -X POST -H "Content-Type: application/json" -d '{"encounterID":"some_generated_encounter_id","bloodPressure":"120/80","temperature":"98.6","pulse":"70","spO2":"95"}' http://localhost:3000/api/vitals/submit
