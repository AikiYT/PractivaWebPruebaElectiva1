
const request = require('supertest');
const app = require('../backend/server');

describe('GET /', () => {
  it('responde con texto', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
