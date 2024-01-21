const { Router } = require("express");
const router = Router();
const { Card } = require("../db");

// User Routes
router.post("/card", async (req, res) => {
  // This route is to create a card.

  // Once user hits this route, he can create new cards by providing name, description, profileLinks and interests.
  const card = await Card.create({
    name: req.body.name,
    description: req.body.description,
    linkedinUsername: req.body.linkedinUsername,
    twitterUsername: req.body.twitterUsername,
    interests: req.body.interests,
  });
  // If there's any issue while creating the card, send the error response.
  if (!card) {
    return res.status(500).json({
      message: "Error creating card!",
    });
  } else {
    // If the card creation is successful, save it in database and send the success response.
    return res.status(200).json({
      message: "Card created Successfully!",
      cardId: card._id,
    });
  }
});

router.get("/cards", async (req, res) => {
  // This route returns all the cards created by different users.
  const cards = await Card.find({});
  if (!cards) {
    // If the cards are not found, send the error response.
    return res.status(404).json({
      message: "No cards found!",
    });
  } else {
    // If the cards are found, return the cards as response.
    return res.status(200).json(cards);
  }
});

module.exports = router;
