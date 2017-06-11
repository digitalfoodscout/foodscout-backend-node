const request = require('supertest');
const fixtures = require('sequelize-fixtures');

describe('LoginController', () => {
  before(done => {
    models.sequelize.sync({ force: true }).then(() => {
      done();
    });
  });

  beforeEach(done => {
    fixtures.loadFile('test/fixtures/login.json', models).then(() => {
      done();
    });
  });

  describe('/authorize', () => {
    it('authorization without client_id should fail', done => {
      request(url)
        .post('/authorize')
        .send({ username: 'dsendzik', password: 'Ldaptest01' })
        .expect(401, done);
    });

    it('authorization with wrong client_id should fail', done => {
      request(url)
        .post('/authorize')
        .send({ username: 'dsendzik', password: 'Ldaptest01', client_id: 'blubb' })
        .expect(401, done);
    });

    it('login with existing user should be successfull', done => {
      request(url)
        .post('/authorize')
        .send({ username: 'dsendzik', password: 'Ldaptest01', client_id: 'webapp' })
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('login with existing user and wrong password should be unsuccessfull', done => {
      request(url)
        .post('/authorize')
        .send({ username: 'dsendzik', password: 'WrongPassword', client_id: 'webapp' })
        .expect(401, done);
    });

    it('test successfull login with new user', done => {
      request(url)
        .post('/authorize')
        .send({ username: 'newuser', password: 'Ldaptest02', client_id: 'webapp' })
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('test unsuccessfull login with new user', done => {
      request(url)
        .post('/authorize')
        .send({ username: 'newuser', password: 'WrongPassword', client_id: 'webapp' })
        .expect(401, done);
    });
  });
});
