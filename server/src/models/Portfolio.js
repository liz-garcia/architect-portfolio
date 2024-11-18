import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  heroSection: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
});

const Portfolio = mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
