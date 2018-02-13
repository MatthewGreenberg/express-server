const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  username: String,
  password: String,
  email: String
});

mongoose.model('users', userSchema);
