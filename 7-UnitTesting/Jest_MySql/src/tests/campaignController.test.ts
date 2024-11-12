import { Request, Response } from "express";
import campaignController from "../controllers/campaignController";
import { Campaign } from "../models/Campaign";
import { AppDataSource } from "../database";

jest.mock("typeorm", () => ({
  AppDataSource: {
    getRepository: jest.fn(),
  },
}));

describe("Campaign Controller - Create Campaign", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let saveMock: jest.Mock;

  // Mock data
  beforeEach(() => {
    req = { body: { name: "Test Campaign 1", budget: 2000 } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(), // This allows you to chain .status() with .json()
    };

    saveMock = jest
      .fn()(AppDataSource.getRepository as jest.Mock)
      .mockReturnValue({
        create: jest.fn().mockReturnValue({
          name: req.body.name,
          budget: req.body.budget,
          status: "active",
        }),
        save: saveMock,
      });
  });

  it("Should Create a new Campaign", async () => {
    await campaignController.createCampaign(req as Request, res as Response);

    expect(saveMock).toHaveBeenCalled();
    expect(res.status).toHaveBeenNthCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Campaign created" })
    );
  });
});
