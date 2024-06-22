const vars = require("../../dist/config/vars")
const request = require("supertest")
const httpStatus = require("http-status")
const app = require("../../dist/core/app")
const { faker } = require("@faker-js/faker")

describe('Test Sign-up routes', () => {
  describe('GET /v1/auth/signup.email', () => {

    test('should return 400 when no payload request', async () => {
      await request(app.default).post('/v1/auth/signup.email').send().expect(httpStatus.BAD_REQUEST);
    });

    // test('should return 422 when email/password is not valid', async () => {
    //   await request(app.default).post('/v1/auth/signup.email').send({
    //     email: "emailzonk",
    //     password:"12345678"
    //   })
    //   .expect(httpStatus.UNPROCESSABLE_ENTITY)
    //   .then(response=>{
    //     expect(response.body.code).toEqual("weak_password")
    //   })

    // });

    // test('should return 422 password less than 8 chars', async () => {
    //   await request(app.default).post('/v1/auth/signup.email').send({
    //     email: faker.internet.email(),
    //     password:"1234567"
    //   })
    //   .expect(httpStatus.UNPROCESSABLE_ENTITY)
    //   .then(response=>{
    //     expect(response.body.code).toEqual("weak_password")
    //   })
    // });

    // test('should return OK 201 when email & password validated', async () => {
    //   await request(app.default).post('/v1/auth/signup.email').send({
    //     email: "zon@gmail.com", // please put real email
    //     password:"aa12345678"
    //   })
    //   .expect(httpStatus.CREATED)
    // });

    //http://localhost:3000/#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IjVuNldNOUJBRVlNbE1yQVIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE5MDQ3MTcyLCJpYXQiOjE3MTkwNDM1NzIsImlzcyI6Imh0dHBzOi8vZWpuaWFydnphZm9uamFxZWJ5bHkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjdkNDRiNzcxLTdiZTEtNGIzMS04ZWY5LWM0MDVhM2VmNjk2MSIsImVtYWlsIjoiZGlhbi5hZnJpYWw4NkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZGlhbi5hZnJpYWw4NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiN2Q0NGI3NzEtN2JlMS00YjMxLThlZjktYzQwNWEzZWY2OTYxIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib3RwIiwidGltZXN0YW1wIjoxNzE5MDQzNTcyfV0sInNlc3Npb25faWQiOiJjYWE3Y2U0Mi00YzZjLTRkMmQtOTIwMS02MTg0NGQyMzVmMTAiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.UnZyCOh1v61ZS8KbFQ_ZEpQJUA_eSG0EhajhmOlq37g&expires_at=1719047172&expires_in=3600&refresh_token=7G4vpeBEQQCPWT1uZxPqtQ&token_type=bearer&type=signup

    test('verify user by email', async () => {
      await request(app.default)
        .get('/v1/auth/verify.email')
        .send({
          access_token:"<accessToken>", // please put real email
        }).expect(httpStatus.OK)
    });

  });

  
  
});