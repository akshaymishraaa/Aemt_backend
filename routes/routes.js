const express = require("express");
const router = express.Router();
const organization = require("../model/organizationModel");
const userData = require("../model/userModel");
const tabs = require("../model/tabsModel");
const countries = require("../model/countryModal");
const states = require("../model/stateModal");
const cities = require("../model/citiesModel");
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express')

const app = express();

/**
 * @swagger
 * /registerUser:
 *   post:
 *     summary: Register user.
 *     description: Register user for erp application.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
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
        { label: "Dashboard", status: true, value: "dashboard" },
        { label: "User management", status: true, value: "userManagement" },
        {
          label: "Application settings",
          status: true,
          value: "applicationSetting",
        },
        { label: "Audit logs", status: true, value: "auditLogs" },
        { label: "User profile", status: true, value: "userProfile" },
        { label: "Student admin", status: false, value: "studentAdmin" },
        { label: "Employee admin", status: false, value: "employeeAdmin" },
        {
          label: "Examination admin",
          status: false,
          value: "examinationAdmin",
        },
        { label: "Management admin", status: false, value: "managementAdmin" },
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
/**
 * @swagger
 * /getAllOrganization:
 *   get:
 *     summary: Get all organization.
 *     description: Get the Registered Organization.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */

router.get("/getAllOrganization", async (req, res) => {
  try {
    const data = await organization.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get All countries api.
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get all countries.
 *     description: Get all the countries.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get("/countries", async (req, res) => {
  try {
    const data = await countries.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all state
/**
 * @swagger
 * /states:
 *   post:
 *     summary: Get all the state.
 *     description: Get all the state.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
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
/**
 * @swagger
 * /cities:
 *   post:
 *     summary: Get all the cities .
 *     description: Get all the cities.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
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
/**
 * @swagger
 * /validateUser:
 *   post:
 *     summary: Valiate User.
 *     description: Validate users.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.post("/validateUser", async (req, res) => {
  const request = req.body;
  try {
    const data = await userData.find({
      email: request.email,
      password: request.password,
    });
    if (data.length > 0) {
      const _data = data.map((item) => {
        delete item.password;
        return item;
      });
      console.log("122.....", _data);
      res.send({ id: data[0]._id });
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
/**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Create User.
 *     description: Create User.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
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
/**
 * @swagger
 * /getAllUserDetails:
 *   get:
 *     summary: Get all users details.
 *     description: Get all users details.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get("/getAllUserDetails", async (req, res) => {
  try {
    const data = await userData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// find user by user id API
/**
 * @swagger
 * /findUserById:
 *   get:
 *     summary: Find User by userId.
 *     description: Find User by userId.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get("/findUserById/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await userData.findById(_id);
    delete data.password;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all Tabs
//Get all Tabs
/**
 * @swagger
 * /getTabs:
 *   get:
 *     summary: Get all the tabs in module.
 *     description: Get all the tabs in module.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get("/getTabs", async (req, res) => {
  try {
    const data = await tabs.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Update by ID Method
/**
 * @swagger
 * /update:
 *   patch:
 *     summary: Update User by userId.
 *     description: Update User by userId.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.patch("/updateUserById/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const options = { new: true }; // this true or false will specify that whether we want to return a new data in body or not.
    const data = await userData.findByIdAndUpdate(id, updatedUserData, options);

    res.send(data);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

//Delete user by Id
/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete user by user id.
 *     description: Delete user by user id.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.delete("/deleteUserById/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userData.findByIdAndDelete(id);
    res.send("User successfully delete.");
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

module.exports = router;
