const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {

    const { Hospitals, Departments , HospitalStaff,Doctors,Patients,Rooms } = cds.entities;

    //  CREATE FOR ENTITIES

    srv.on('CREATE', 'Hospitals', async (req) => {
        try {
            const { hospitalName, address, numberOfDepartments, departments, staff, patients } = req.data;

            const hospitalData = {
                hospitalName,
                address,
                numberOfDepartments,
                departments,
                staff,
                patients
            };

            const result = await INSERT.into(Hospitals).entries(hospitalData);
            return result;
        } catch (error) {
            req.error(500, `Error creating hospital: ${error.message}`);
        }
    });

    srv.on('CREATE', 'Departments', async (req) => {
        try {
            const { departmentName, hospitalID } = req.data;
            const departmentData = {
                departmentName,
                hospital_ID: hospitalID // Assuming `hospital` is a foreign key (ID)
            };
            const result = await INSERT.into(Departments).entries(departmentData);
            return result;
        } catch (error) {
            req.error(500, `Error creating department: ${error.message}`);
        }
    });

    srv.on('CREATE', 'Doctors', async (req) => {
        try {
            const { doctorName, specialty, monthlyPayMin, monthlyPayMax, departmentID } = req.data;
            const doctorData = {
                doctorName,
                specialty,
                monthlyPayMin,
                monthlyPayMax,
                department_ID: departmentID // Assuming association by department ID
            };
            const result = await INSERT.into(Doctors).entries(doctorData);
            return result;
        } catch (error) {
            req.error(500, `Error creating doctor: ${error.message}`);
        }
    });

    srv.on('CREATE', 'DoctorHospitals', async (req) => {
        try {
            const { doctorID, hospitalID } = req.data;
            const doctorHospitalData = {
                doctor_ID: doctorID,
                hospital_ID: hospitalID
            };
            const result = await INSERT.into(DoctorHospitals).entries(doctorHospitalData);
            return result;
        } catch (error) {
            req.error(500, `Error creating doctor-hospital relation: ${error.message}`);
        }
    });

    srv.on('CREATE', 'Patients', async (req) => {
        try {
            const { patientName, age, gender, hospitalID } = req.data;
            const patientData = {
                patientName,
                age,
                gender,
                hospital_ID: hospitalID
            };
            const result = await INSERT.into(Patients).entries(patientData);
            return result;
        } catch (error) {
            req.error(500, `Error creating patient: ${error.message}`);
        }
    });

    srv.on('CREATE', 'Appointments', async (req) => {
        try {
            const { appointmentDate, patientID, doctorID } = req.data;
            const appointmentData = {
                appointmentDate,
                patient_ID: patientID,
                doctor_ID: doctorID
            };
            const result = await INSERT.into(Appointments).entries(appointmentData);
            return result;
        } catch (error) {
            req.error(500, `Error creating appointment: ${error.message}`);
        }
    });

    srv.on('CREATE', 'HospitalStaff', async (req) => {
        try {
            const { staffName, role, hospitalID } = req.data;
            const staffData = {
                staffName,
                role,
                hospital_ID: hospitalID
            };
            const result = await INSERT.into(HospitalStaff).entries(staffData);
            return result;
        } catch (error) {
            req.error(500, `Error creating hospital staff: ${error.message}`);
        }
    });

    srv.on('CREATE', 'MedicalRecords', async (req) => {
        try {
            const { recordDate, description, patientID } = req.data;
            const recordData = {
                recordDate,
                description,
                patient_ID: patientID
            };
            const result = await INSERT.into(MedicalRecords).entries(recordData);
            return result;
        } catch (error) {
            req.error(500, `Error creating medical record: ${error.message}`);
        }
    });

    srv.on('CREATE', 'Rooms', async (req) => {
        try {
            const { roomNumber, capacity, hospitalID } = req.data;
            const roomData = {
                roomNumber,
                capacity,
                hospital_ID: hospitalID
            };
            const result = await INSERT.into(Rooms).entries(roomData);
            return result;
        } catch (error) {
            req.error(500, `Error creating room: ${error.message}`);
        }
    });


    // READ

    

})