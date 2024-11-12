import { Request, Response } from "express";
import { Campaign } from "../models/Campaign";
import { AppDataSource } from "../database";

const createCampaign = async (req: Request, res: Response) => {
  const { name, budget } = req.body;

  if (!name || !budget) {
    return res.status(400).json({ message: "Name and budget are required" });
  }

  try {
    // Get the Campaign repository from AppDataSource
    const campaignRepository = AppDataSource.getRepository(Campaign);

    // Create a new Campaign instance
    const newCampaign = campaignRepository.create({
      name,
      budget,
      status: "active",
    });

    // Save the new campaign to the database
    const savedCampaign = await campaignRepository.save(newCampaign);

    // Return the saved campaign in the response
    res
      .status(201)
      .json({ message: "Campaign created", campaign: savedCampaign });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ message: "Error creating campaign", error });
  }
};

export default { createCampaign };
