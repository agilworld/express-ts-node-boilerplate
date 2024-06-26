const request = require("supertest")
const httpStatus = require("http-status")
const app = require("../../dist/core/app")
// import { request } from "supertest"
// import httpStatus from "http-status"
// import app from "../dist/core/app"

describe('Test Sign-in routes', () => {
  describe('GET /v1/auth/login', () => {
    let newUser = {
      email:"dian.afrial86@gmail.com"
    }

    // test('should return 401 when no payload request', async () => {
    //   await request(app.default).post('/v1/auth/login.email').expect(httpStatus.UNAUTHORIZED);
    // });

    // test('should return 401 when email & password is not exists', async () => {
    //   await request(app.default).post('/v1/auth/login.email').send({
    //     email:"emailzonk",
    //     password:"12345678"
    //   }).expect(httpStatus.UNAUTHORIZED);
    // });

    test('should return 200 when email & password is matched', async () => {
      const res = await request(app.default)
        .post('/v1/auth/login.email')
        .send({
          email: newUser.email,
          password: "aa12345678"
        })
        .expect(httpStatus.OK);

      expect(res.body).toBe(newUser.email);
      console.log("res", res.body)
      // const user = await request(app.default)
      //   .get("/v1/user")
      //   .set('Authorization', `Bearer ${res.body.session.access_token}`)
      //   .expect(httpStatus.OK)

      // expect(res.body.user.email).toBe(newUser.email);

    });

  });
  
});