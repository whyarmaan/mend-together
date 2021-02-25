const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  id: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
  },
  friends: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  ],
  favArtists: [
    {
      type: String,
    },
  ],
  location: {
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
  },
});

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;
