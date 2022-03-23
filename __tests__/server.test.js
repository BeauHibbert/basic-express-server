'use strict';

const supertest = require('supertest');
const server = require('../app.js');
const request = supertest(server.app);

describe('Testing the person API', () => {

  test('API should respond with a 200 on GET to /person if a name property exists on the request', async () => {

    const response = await request.get('/person?name=beau');

    expect(response.status).toEqual(200);
    expect(response.query.name).toEqual('beau');
  });

  test('API should respond with a 500 when no name is present', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
    expect(response.name).toEqual('no name with request');
  });

  test('API should respond with a 404 when a non GET request is made', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
  });

  test('API should respond with a 404 when a GET request is made to a bad route', async () => {
    const response = await request.get('/aerbvaervkmawe');
    expect(response.status).toEqual(404);
  });
});

