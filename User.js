const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
    match: [/^(?=.*\d)(?=.*[^\da-zA-Z])(?=.*[A-Z])(?=.*[a-z]).{8,}$/, 'Please fill a valid password'],
    
  },
  userType: {
    type: Number,
    required: true,
    enum: [1, 2, 3] 
  }
}, {timestamps: true} );

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
