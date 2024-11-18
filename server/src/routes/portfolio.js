import express from "express";
import getPortfolios from "../controllers/portfolio/getPortfolios.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/", getPortfolios);

export default portfolioRouter;
