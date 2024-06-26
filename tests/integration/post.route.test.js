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

    const token = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjVuNldNOUJBRVlNbE1yQVIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE5NDE4MDcxLCJpYXQiOjE3MTk0MTQ0NzEsImlzcyI6Imh0dHBzOi8vZWpuaWFydnphZm9uamFxZWJ5bHkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjdkNDRiNzcxLTdiZTEtNGIzMS04ZWY5LWM0MDVhM2VmNjk2MSIsImVtYWlsIjoiZGlhbi5hZnJpYWw4NkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZGlhbi5hZnJpYWw4NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiN2Q0NGI3NzEtN2JlMS00YjMxLThlZjktYzQwNWEzZWY2OTYxIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTk0MTQ0NzF9XSwic2Vzc2lvbl9pZCI6IjIyZTY5ODg1LWRjZDMtNGJhOC1hNTVkLTczNDlhZTMwOWI1NiIsImlzX2Fub255bW91cyI6ZmFsc2V9.6vQa4yyR01wbmQTcthXm0v59QhjMT692utKmwRhJ060'

    test('should return 200 when post', async () => {
      const res = await request(app.default)
        .post('/v1/post/')
        .set('Authorization', `Bearer ${token}`)
        .send(newPost)
        .expect(httpStatus.OK);

      expect(res.body.title).toBe(newPost.title);

    });

  });
  
});