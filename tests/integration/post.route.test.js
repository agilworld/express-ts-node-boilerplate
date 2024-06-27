const request = require("supertest")
const httpStatus = require("http-status")
const app = require("../../dist/core/app")

describe('Test Post routes', () => {
  describe('POST /v1/post', () => {
    let newPost = {
      title:"What is Async / Await Javascript",
      slug:"what-async-await-javascript",
      content:"Good explanation"
    }

    const token = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjVuNldNOUJBRVlNbE1yQVIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE5NTU2MzQ5LCJpYXQiOjE3MTk0Njk5NDksImlzcyI6Imh0dHBzOi8vZWpuaWFydnphZm9uamFxZWJ5bHkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjdkNDRiNzcxLTdiZTEtNGIzMS04ZWY5LWM0MDVhM2VmNjk2MSIsImVtYWlsIjoiZGlhbi5hZnJpYWw4NkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZGlhbi5hZnJpYWw4NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiN2Q0NGI3NzEtN2JlMS00YjMxLThlZjktYzQwNWEzZWY2OTYxIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTk0Njk5NDl9XSwic2Vzc2lvbl9pZCI6ImQwYmU1NzFmLWY3M2QtNGYzOS1iNzRiLTkwMTNiY2NkYmEyMyIsImlzX2Fub255bW91cyI6ZmFsc2V9.aToOAGRTojL4UPZfJeWzDAVRt0SMoWtPIQMH10-HmAA'

    test('should return 200 when post', async () => {
      const res = await request(app.default)
        .post('/v1/post/create')
        .set('Authorization', `Bearer ${token}`)
        .send(newPost)
        .expect(httpStatus.CREATED);

    });

  });
  
});