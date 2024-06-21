const vars = require("../../dist/config/vars")
const request = require("supertest")
const httpStatus = require("http-status")
const app = require("../../dist/core/app")

describe('Status routes', () => {
  describe('GET /v1/status', () => {
    test('should return 200 when running in production', async () => {
      vars.env = 'production';
      await request(app.default).get('/v1/status').send().expect(httpStatus.OK);
      vars.env = process.env.NODE_ENV ?? "";
    });
  });
});