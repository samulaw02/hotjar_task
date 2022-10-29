import request from 'supertest';
import { app } from '../src/config';

let pages: string[] = ["control.html", "variant1.html"];
let index: number = 1;

describe('GET /pricing', () => {
  test('GET /pricing => return one of two screens', () => {
    return request(app)
      .get('/pricing')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);
  })
});