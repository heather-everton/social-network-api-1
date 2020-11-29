const router = require('express').Router();

const {
  createUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .post(createUser);

module.exports = router;