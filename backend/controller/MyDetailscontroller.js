const MyDetails = require("../models/MyDetailsmodel");

const MyDetail = async (req, res) => {
  const { Email, PhoneNumber, Address, Seats } = req.body;
  try {
    const email = await MyDetails.findOne({ Email });
    const Phone = await MyDetails.findOne({ PhoneNumber });
    let existingDetails = await MyDetails.findOne();
    if(existingDetails){
      return res.status(400).json({message: "Details already exist. Only one admin details allowed"})
    }
    if (email) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (Phone) {
      return res
        .status(400)
        .json({ message: "This Phone Number is already exists" });
    }
    if(!Email){
        return res.status(400).json({messag: "Please fill email id "})
    }
    if(!Seats){
        return res.status(400).json({messag: "Please fill Seats value"})
    }
    if(!PhoneNumber){
        return res.status(400).json({message: "Please fill Phone Number"})
    }
    if(!Address){
        return res.status(400).json({message: "Please fill your Address"})
    }
    if(!PhoneNumber || !Email || !Address || !Seats){
      return res.status(400).json({message: "All field are required"});
    }
    if(PhoneNumber.length <10){
      return res.status(400).json({message: "Minimum length of phone number should "})
    }

    const AddDetails = new MyDetails({
      Email,
      PhoneNumber,
      Address,
      Seats
    });
    await AddDetails.save();
    res.status(200).json({ message: "Your details successfully added" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getAllDetails = async (req, res) =>{
  try{
  const AllDetails = await MyDetails.find();
  res.status(200).json(AllDetails)
  }
  catch(error){
    res.status(400).json({message: "Something went wrong"});
  }
}
module.exports = { MyDetail, getAllDetails };
