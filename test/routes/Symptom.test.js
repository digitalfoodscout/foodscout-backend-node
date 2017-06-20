const request = require('supertest');
const fixtures = require('sequelize-fixtures');


describe('SymptomTest',  function(){

  describe('get /symptom', function() {
    it('Get All Symptoms', done => {
      request('localhost:8080').get("/symptom").send({} ).expect(200, done);
  });
  });

  describe('get /symptom/:id', function() {
    it('Get Existing Symptom', done => {
      request('localhost:8080').get("/symptom").send({} ).expect(200, done);
  });

    it('Get non-Existing Symptom', done => {
      request('localhost:8080').get("/symptom/0").send({} ).expect(200, done);
  });
  });

  describe('del /symptom/:id', function() {
    it('Delete avaible Element', done => {
      request('localhost:8080').get("/symptom/13").send({} ).expect(200, done);
  });

    it('Delete non-avaible Element', done => {
      request('localhost:8080').get("/symptom/1").send({} ).expect(200, done);
  });
  });

  describe('put /symptom', function() {
    it('post', done => {
      request('localhost:8080').get("/symptom").send({} ).expect(200, done);
  });
  });

  describe('post /symptom', function() {
    it('Create Symptom of right structure', done => {
      request('localhost:8080').post("/symptom").send({ name: "Bauchweh"} ).expect(201, done);
  });

    it('Create Symptom of wrong structure', done => {
      request('localhost:8080').post("/symptom").send({ wrongAttr: "Wrong", wrong: "Test"} ).expect(200, done);
  });
  });
});

