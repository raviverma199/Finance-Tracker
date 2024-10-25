const IncomeSource = require("../models/income");

exports.createincome = async (req, res) => {
  try {
    let { incomesource, amount, date, category, description } = req.body;

    let createincome = await IncomeSource.create(
      incomesource,
      amount,
      date,
      category,
      description
    );
    

    res.status(200).json({ msg: "successfully", success: true });
  } catch (error) {
    throw new Error(error);
  }
};
