// to avoid try catch block in every controller we use express-async-handler
const asyncHandler = require("express-async-handler");

// import model of contact
const Contact = require("../models/contactModel");

//@desc Get all contacts of all user for admin
//@route GET /api/contacts/admin
//@access private
const getContactsAdmin = asyncHandler(async (req, res) => {
  if(req.user.email.toString() !== "admin@gmail.com"){
    res.status(401);
    throw new Error("You are not authorized to access content of this api");
  }
  const contact = await Contact.find({});
  if (!contact) {
    res.status(404);
    throw new Error("Admin: No contacts found for anyone");
  }
  res.status(200).json({ message: `logged in as ${req.user.email}`, contact });
});

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({ user_id: req.user.id });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: `logged in as ${req.user.email}`, contact });
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  
  if(req.user.email.toString() !== "admin@gmail.com") {
    if (!contact || contact.user_id.toString() !== req.user.id.toString()) {
      res.status(401);
      throw new Error("You are not authorized to view this contact if it exists");
    }
  }
  if(!contact){
    res.status(404);
    throw new Error("Contact not found admin sir");
  }
  res.status(200).json({ message: `logged in as ${req.user.email}`, contact });
});

//@desc create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone");
  }

  const findContact = await Contact.findOne({ email });

  const contact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    user_id: req.user.id, // coming from token which is decoded in validateTokenHandler
  });

  res.status(201).json(contact);
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  
  if(req.user.email.toString() !== "admin@gmail.com") {
    if (!contact || contact.user_id.toString() !== req.user.id.toString()) {
      res.status(401);
      throw new Error("You are not authorized to view this contact if it exists");
    }
  }
  if(!contact){
    res.status(404);
    throw new Error("Contact not found admin sir");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(201).json(updatedContact);
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if(req.user.email.toString() !== "admin@gmail.com") {
    if (!contact || contact.user_id.toString() !== req.user.id.toString()) {
      res.status(401);
      throw new Error("You are not authorized to view this contact if it exists");
    }
  }
  if(!contact){
    res.status(404);
    throw new Error("Contact not found admin sir");
  }

  await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json(contact);
});

module.exports = {
  getContactsAdmin,
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
