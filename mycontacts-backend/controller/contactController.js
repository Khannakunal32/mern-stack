// to avoid try catch block in every controller we use express-async-handler
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ messaage: "Get all contacts" });
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public
const getContact =  asyncHandler(async (req, res) => {
  res.status(200).json({ messaage: `Get contact for ${req.params.id}` });
});

//@desc create contact
//@route POST /api/contacts
//@access Public
const createContact =  asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone");
  }
  res.status(201).json({ messaage: `Posted new contact` });
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact =  asyncHandler(async (req, res) => {
  res.status(201).json({ messaage: `Updated contact for ${req.params.id}` });
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact =  asyncHandler(async (req, res) => {
  res.status(201).json({ messaage: `Deleted contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
