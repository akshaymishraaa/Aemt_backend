const express = require("express");
const router = express.Router();
const organization = require("../model/organizationModel");
const tabs = require("../model/tabsModel");
const countries = require("../model/countryModal");
const states = require("../model/stateModal");
const cities = require("../model/citiesModel");
const {
  registerOrganization,
  validateUser,
  createUser,
  getAllUserDetails,
  updateUserById,
  findUserById,
  deleteUserById,
} = require("../controler/userControler");
const {AddStudent,findStudentById, getAllStudentDetails, updateStudentById} = require('../controler/stundetControler')


// get all organization
/**
 * @swagger
 * /getAllOrganization:
 *   get:
 *     summary: Get all organization.
 *     description: Get the Registered Organization.
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

/**
 * @swagger
 * /registerUser:
 *   post:
 *     summary: Register user.
 *     description: Register user for erp application.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organizationName:
 *                 type: string
 *                 description: The  organization name.
 *               organizationEmailId:
 *                 type: string
 *                 description: The  organization email id.
 *               contactNumber:
 *                 type: number
 *                 description: The  contact number.
 *                 example: 9113775375
 *               organizationType:
 *                 type: string
 *                 description: The  organization Type.
 *               address:
 *                 type: string
 *                 description: The  address.
 *               country:
 *                 type: string
 *                 description: The  country.
 *               state:
 *                 type: string
 *                 description: The  state.
 *               city:
 *                 type: string
 *                 description: The  city.
 *               zipCode:
 *                 type: number
 *                 description: The  zipcode.
 *                 example: 844101
 *               regEmpId:
 *                 type: string
 *                 description: The  organization name.
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
router.post("/registerUser", registerOrganization);
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
router.post("/validateUser", validateUser);

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
router.post("/createUser", createUser);

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
router.get("/getAllUserDetails", getAllUserDetails);

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
router.get("/findUserById/:id", findUserById);

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
router.patch("/updateUserById/:id", updateUserById);

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
router.delete("/deleteUserById/:id", deleteUserById);
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

// Add student API 

router.post("/addStudent",AddStudent);

//Find student by Id API

router.get("/findStudentById/:id",findStudentById);

// Get all student details

router.get("/getAllStudentDetails",getAllStudentDetails);

// Update student by Id API

router.patch("/updateStudentById",updateStudentById)


module.exports = router;
