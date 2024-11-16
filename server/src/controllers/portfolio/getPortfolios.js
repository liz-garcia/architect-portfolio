import Portfolio from "../../models/Portfolio.js";
import { logError } from "../../utils/logging.js";

const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json({ success: true, result: portfolios });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get portfolio, try again later.",
    });
  }
};

export default getPortfolios;
