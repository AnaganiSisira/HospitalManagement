import cds from '@sap/cds';
import { expect } from 'chai';
import request from 'supertest';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Hospital Service Unit Tests', () => {
  let app;

  // Setup the app before the tests run
  before(async () => {
    app = await cds
      .serve('MyService')
      .in(path.join(__dirname, '/../srv'));
  });

  it('should create a hospital', async () => {
    const hospitalData = {
      hospitalName: 'City Hospital',
      address: '123 Main St',
      numberOfDepartments: 5,
      departments: [],
      staff: [],
      patients: []
    };

    const response = await request(app)
      .post('/Hospitals')
      .send(hospitalData)
      .set('Content-Type', 'application/json');
      
    expect(response.status).to.equal(201);
    expect(response.body.hospitalName).to.equal('City Hospital');
  });

  // Similar tests for Departments, Doctors, etc...
});
