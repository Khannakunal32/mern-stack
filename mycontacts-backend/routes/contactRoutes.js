// using controller
const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactsAdmin,
} = require("../controller/contactController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

// uses validateTokenHandler middleware for all routes of contact
router.use(validateTokenHandler);

// GET /api/contacts/admin
router.route("/admin").get(getContactsAdmin);

// GET /api/contacts and POST /api/contacts
router.route("/").get(getContacts).post(createContact);

// GET /api/contacts/:id and PUT /api/contacts/:id and DELETE /api/contacts/:id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
 
module.exports = router;
