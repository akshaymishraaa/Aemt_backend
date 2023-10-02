const express = require("express");
const router = express.Router();
const organization = require("../model/organizationModel");

router.post("/registerUser", async (req, res) => {
  const body = req.body.data;
  const data = new organization({
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
    password: body.password,
  });
  console.log("7....", data);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getAllOrganization", async (req, res) => {
  try {
    const data = await organization.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//For log in super user.
router.post("/validateOrg", async (req, res) => {
  try {
    const data = await organization.find({
      organizationEmailId: req.body.email,
      password: req.body.password,
    });
    res.send(data);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
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
