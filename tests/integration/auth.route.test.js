const vars = require("../../dist/config/vars")
const request = require("supertest")
const httpStatus = require("http-status")
const app = require("../../dist/core/app")
const { faker } = require("@faker-js/faker")

describe('Test Auth routes', () => {
  describe('GET /v1/auth/signup.email', () => {

    test('should return 400 when no payload request', async () => {
      await request(app.default).post('/v1/auth/signup.email').send().expect(httpStatus.BAD_REQUEST);
    });

    test('should return 422 when email is not valid', async () => {
      await request(app.default).post('/v1/auth/signup.email').send({
        email: "emailzonk",
        password:"12345678"
      })
      .expect(httpStatus.UNPROCESSABLE_ENTITY)
      .then(response=>{
        expect(response.body.code).toEqual("weak_password")
      })

    });

    test('should return 422 password less than 8 chars', async () => {
      await request(app.default).post('/v1/auth/signup.email').send({
        email: faker.internet.email(),
        password:"1234567"
      })
      .expect(httpStatus.UNPROCESSABLE_ENTITY)
      .then(response=>{
        expect(response.body.code).toEqual("weak_password")
      })
    });
  });

  
});