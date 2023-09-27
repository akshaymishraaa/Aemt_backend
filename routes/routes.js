const express = require("express");
const router = express.Router();
const Model = require("../model/model");

router.post("/registerUser", async(req, res) => {
   console.log('7....',body)
   const body = req.body.data;
  const data = new Model({
    organizationName: body.organizationName,
    organizationEmailId: body.organizationEmailId,
    contactNumber: body.contactNumber,
    organizationType: body.organizationType,
    address: body.address,
    country: body.country,
    state: body.state,
    city: body.city,
    zipCode: body.zipCode,
    regEmpId: body.regEmpId,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getUserDetails", (req, res) => {
  res.send("Get all api");
});
//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
