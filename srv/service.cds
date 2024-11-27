using com.cy.hospital as db from '../db/service';

service MyService {

entity Hospitals as projection on db.Hospitals;
entity Departments as projection on db.Departments;
entity Doctors as projection on db.Doctors;
entity DoctorHospitals as projection on db.DoctorHospitals;
entity Patients as projection on db.Patients;
entity Appointments as projection on db.Appointments;
entity MedicalRecords as projection on db.MedicalRecords;
entity HospitalStaff as projection on db.HospitalStaff;
entity Rooms as projection on db.Rooms;

}