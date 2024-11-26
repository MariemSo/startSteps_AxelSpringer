import app from "../index.js";
import request from "supertest";
import { AppDataSource } from "../config/dataBase.js";
import { faker } from "@faker-js/faker";
import { userRepo } from "../modules/User/controllers.js";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

jest.mock("../modules/User/controllers.js");

describe("User Tests", () => {
  const randomUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.fullName(),
  };

  // Clear all mocks after each test to avoid side effects
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should register a User", async () => {
    (userRepo.findOneBy as jest.Mock).mockResolvedValue(null);

    (userRepo.create as jest.Mock)
      .mockImplementation((user) => user)
      (userRepo.save as jest.Mock)
      .mockImplementation({ ...randomUser, id: faker.number });

    const res = await request(app).post("/api/users/register").send(randomUser);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User Registered Successfully");
  });
});
