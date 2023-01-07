const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'first name is requiired'],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, 'lasy name is requiired'],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, 'username is requiired'],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is requiired'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'password is requiired'],
    },
    picture: {
      type: String,
      default: 'https://www.pinterest.com/pin/597571444309233047/',
    },
    cover: {
      type: String,
    },
    gender: {
      type: String,
      required: [true, 'password is requiired'],
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },

    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: 'User',
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highScool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      bio: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationsip: {
        type: String,
        enum: ['single', 'In a relationship', 'Merrird ', 'Divorded'],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: 'Post',
        },
        savdAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserModel', userSchema);
