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
    trim: true
  },
  username: {
    type: String,
    required: 'You need to provide an author!',
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

const ThoughSchema = new Schema({
  username: {
    type: String,
    required: 'You need to provide an author!',
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