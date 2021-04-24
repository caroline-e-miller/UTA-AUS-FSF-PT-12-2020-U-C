const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  string: {
    type: String,
    trim: true,
    required: "String is required."
  },
  password: {
    type: String,
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
