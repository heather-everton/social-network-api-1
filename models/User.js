const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'You need to provide a username!',
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: 'You need to provide an email address!',
    trim: true
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  });

// get total count of friend on retrieval
UserSchema.virtual('friendCount').get(function () {
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;