const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("your-mongodb-url");

const CardSchema = mongoose.Schema({
  // Schema definition here
  // The cards should be unique, displaying the name, description, profileLinks and interests.

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkedinUsername: {
    type: String,
    required: true,
  },
  twitterUsername: {
    type: String,
    required: true,
  },
  interests: [
    {
      type: String,
      required: true,
    },
  ],
});

const Card = mongoose.model("Card", CardSchema);

module.exports = {
  Card,
};
