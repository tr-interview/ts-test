import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const accessToken = process.env.GITHUB_PAT;
const github_org = process.env.GITHUB_ORG;

if (!accessToken) {
  console.error('GitHub Personal Access Token not found in .env file');
  process.exit(1);
}

// GitHub API base URL
const apiUrl = 'https://api.github.com';


// Please add your script here