// using controller
const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");
 
// GET /api/contacts and POST /api/contacts
router.route("/").get(getContacts).post(createContact);

// GET /api/contacts/:id and PUT /api/contacts/:id and DELETE /api/contacts/:id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
 
module.exports = router;
