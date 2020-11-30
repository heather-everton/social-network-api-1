const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
  .route('/')
  .get(getAllThought)
  .post(addThought);;

// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought);

// /api/thoughts/<thoughtId>/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .delete(removeThought);

module.exports = router;