const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(removeUser);

// Set up POST and DELETE at /api/users/:id/friends/:id
router
  .route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;