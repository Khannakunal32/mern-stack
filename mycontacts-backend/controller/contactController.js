//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({ messaage: "Get all contacts" });
}

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
    res.status(200).json({ messaage: `Get contact for ${id}` });
}

//@desc create contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
    res.status(201).json({ messaage: `Posted new contact for ${id}` });
}

//@desc update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
    res.status(201).json({ messaage: `Updated contact for ${id}` });
}

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.status(201).json({ messaage: `Deleted contact for ${id}` });
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };