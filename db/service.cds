namespace com.cy.hospital;

using { cuid, managed, Currency } from '@sap/cds/common';

entity Hospitals : cuid, managed {
    hospitalName       : localized String(255) @mandatory;
    address            : String(255);
    numberOfDepartments: Integer @default;
    departments        : Association to many Departments 
                         on departments.hospital = $self;
    staff              : Association to many HospitalStaff 
                         on staff.hospital = $self;
    patients           : Association to many Patients 
                         on patients.hospital = $self;
}

entity Departments : cuid, managed {
    departmentName   : String @mandatory;
    numberOfDoctors  : Integer @default;
    hospital         : Association to Hospitals @mandatory;
    doctors          : Association to many Doctors 
                       on doctors.department = $self;
    appointments     : Association to many Appointments 
                       on appointments.department = $self;
}
  
entity Doctors : cuid, managed {
    doctorName       : String @mandatory;
    specialty        : String(255);
    monthlyPayMin    : Currency;
    monthlyPayMax    : Currency;
    department       : Association to Departments;
    hospitalAssociations : Association to many DoctorHospitals 
                           on hospitalAssociations.doctor = $self;
    appointments     : Composition of many Appointments 
                       on appointments.doctor = $self;
}

entity DoctorHospitals : cuid {
    doctor            : Association to Doctors @mandatory;
    hospital          : Association to Hospitals @mandatory;
}

entity Patients : cuid, managed {
    patientName       : String(255) @mandatory;
    dateOfBirth       : Date;
    medicalRecords    : Composition of many MedicalRecords 
                        on medicalRecords.patient = $self;
    hospital          : Association to Hospitals @mandatory;
    appointments      : Association to many Appointments 
                        on appointments.patient = $self;
    room              : Association to Rooms;                   
}

entity Appointments : cuid, managed {
    appointmentDate   : DateTime @mandatory;
    department        : Association to Departments @mandatory;
    doctor            : Association to Doctors @mandatory;
    patient           : Association to Patients @mandatory;
    hospital          : Association to Hospitals @mandatory;
}

entity MedicalRecords : cuid, managed {
    recordDetails     : String(255);
    createdDate       : DateTime @mandatory;
    patient           : Association to Patients @mandatory;
    doctor            : Association to Doctors @mandatory;
}

entity HospitalStaff : cuid, managed {
    staffName         : String(255) @mandatory;
    role              : String(255);
    hospital          : Association to Hospitals @mandatory;
}

entity Rooms : cuid, managed {
    roomNumber        : String(50) @mandatory;
    roomType          : String(50);
    hospital          : Association to Hospitals @mandatory;
    patients          : Association to many Patients on patients.room = $self;
}




