const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: 'You need to provide a reaction body!',
    trim: true,
    validate: [({ length }) => length <= 280, 'Text should be shorter.']
  },
  username: {
    type: String,
    required: 'You need to provide an user!',
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }
},
  {
    toJSON: {
      getters: true
    }
  });

const ThoughtSchema = new Schema({
  username: {
    type: String,
    required: 'You need to provide an author!',
    trim: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: 'You need to provide an user ID!',
    trim: true
  },
  thoughtText: {
    type: String,
    required: 'You need to provide text for the thought!',
    trim: true
  },
  reactions: [ReactionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }
},
  {
    toJSON: {
      getters: true
    }
  });

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;