const AdsModel = require("../models/ads.model");

const SearchOperations = async(req, res) => {
  console.log(req?.query?.search)
  try{
    const result = await AdsModel.aggregate([
      { $lookup: { from: 'companies', localField: 'companyId', foreignField: '_id', as:'company' } },
      {
        $match: {
          $or: [
            { "primaryText": { $regex: req?.query?.search, $options: "i" } },
            { "headline": { $regex: req?.query?.search, $options: "i" } },
            { "description": { $regex: req?.query?.search, $options: "i" } },
            { "company.name": { $regex: req?.query?.search, $options: "i" } },
          ]
        }
      }
    ]);
    return res.status(200).json(result)
  }catch(err){
    return res.status(500).json({message: err.message});
  }
}

module.exports = { SearchOperations };