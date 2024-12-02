import app from '../index.js';
import request from 'supertest';
import { AppDataSource } from '../config/dataBase.js';
import { faker } from '@faker-js/faker';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

// jest.mock('../modules/User/controllers.js');

describe('User Tests', () => {
  const randomUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.fullName(),
  };

  it('Should register a User', async () => {
    const res = await request(app).post('/api/users/register').send(randomUser);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User Registered Successfully');
  });
});
