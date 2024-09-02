// Import the dotenv library, which helps load environment variables from a .env file
import dotenv from 'dotenv';

// Call dotenv.config() to read the .env file and load the variables into process.env
dotenv.config();

// Define a constant named 'port'. It will be set to the value of the environment variable 'Port'.
// If 'Port' is not defined in the .env file, it will default to 4000.
export const port = process.env.PORT || 4000;
export const customMessage = process.env.CUSTOM_MESSAGE || 'Default message';