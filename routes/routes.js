const express = require("express");
const router = express.Router();
const organization = require("../model/organizationModel");
const userData = require("../model/userModel");
const tabs = require("../model/tabsModel");
const countries = require("../model/countryModal");
const states = require("../model/stateModal");
const cities = require("../model/citiesModel");

const app = express();
// /**
//  * @swagger
//  * /:
//  *  get:
//  *      summary:This Api is for register user
//  *      description:This Api is for register user
//  *      responses:
//  *           200:
//  *                description: To test post resgister 
//  */
// app.get('/',(req,res)=>{
//   res.send('Welcome to mongodb api')
// })


router.post("/registerUser", async (req, res) => {
  const data = new organization({
    organizationName: req?.body.organizationName,
    organizationEmailId: req?.body.organizationEmailId,
    contactNumber: req?.body.contactNumber,
    organizationType: req?.body.organizationType,
    address: req?.body.address,
    country: req?.body.country,
    state: req?.body.state,
    city: req?.body.city,
    zipCode: req?.body.zipCode,
    regEmpId: req?.body.regEmpId,
  });
  try {
    const orgData = await data.save();
    res.status(200).json({
      organization: orgData.organizationName,
      role: [{ label: "Super user", value: "superUser" }],
      modules: [
        "Dashboard",
        "User management",
        "Application setting",
        "Audit logs",
        "User profile",
      ],
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(200).json({
        message:
          "Email Id already exists,Please choose a different email-id for registration",
      });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});
// get all organization

router.get("/getAllOrganization", async (req, res) => {
  try {
    const data = await organization.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get All countries api.
router.get("/countries", async (req, res) => {
  try {
    const data = await countries.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all state

router.post("/states", async (req, res) => {
  try {
    const data = await states.find({
      country_id: req.body.countryId,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all cities

router.post("/cities", async (req, res) => {
  try {
    console.log("75....", req.body);
    const data = await cities.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//For log in super user.
router.post("/validateUser", async (req, res) => {
  const request = req.body.values;
  try {
    const data = await userData.find({
      email: request.email,
      password: request.password,
    });
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send({
        errorCode: 400,
        status: "error",
        message: "Wrong User Id or password",
      });
    }
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

// API for create User

router.post("/createUser", async (req, res) => {
  const data = new userData({
    organization: req.body.orgName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNo: req.body.contactNo,
    password: req.body.password,
    role: req.body.role,
    module: req.body.allowedModule,
  });
  try {
    await data.save();
    res.status(200).json({
      message: "User create successfully.use email id for login",
      status: "success",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(200).json({
        status: "error",
        message:
          "Email Id already exists,Please choose a different email-id for user creation",
      });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// find all user API
router.get("/getAllUserDetails", async (req, res) => {
  try {
    const data = await userData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all Tabs

router.get("/getTabs", async (req, res) => {
  try {
    const data = await tabs.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
