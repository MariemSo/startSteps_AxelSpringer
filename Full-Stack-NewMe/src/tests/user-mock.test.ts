import { faker } from '@faker-js/faker';
import { AppDataSource } from '../config/dataBase';
import { MockDataSource } from './__mocks__/typeorm';
import { Request, Response } from 'express';
import userController from '../modules/User/controllers';

jest.mock('../config/dataBase', () => {
  AppDataSource: new MockDataSource();
});

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('User Tests with mock Database', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let statusMock: jest.Mock;
  let sendMock: jest.Mock;
  const randomUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.fullName(),
  };
  beforeEach(() => {
    req = {};
    statusMock = jest.fn().mockReturnThis();
    sendMock = jest.fn();
    res = { status: statusMock, send: sendMock };
  });
  it('Register function works as expected', async () => {
    const findOneByMock = jest.fn().mockResolvedValue(null);
    const createMock = jest.fn().mockImplementation((data) => ({
      id: 1,
      ...data,
    }));
    const saveMock = jest.fn().mockResolvedValue({
      id: 1,
      ...randomUser,
    });

    AppDataSource.getRepository = jest.fn().mockReturnValue({
      findOneBy: findOneByMock,
      create: createMock,
      save: saveMock,
    });

    req = {
      body: randomUser,
    };

    await userController.register(req as Request, res as Response);

    expect(findOneByMock).toHaveBeenCalledWith({ email: randomUser.email });
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(sendMock).toHaveBeenCalledWith({
      message: 'User Registered Successfully',
    });
  });
});
