import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function AddCard() {
  // In the card, we store the name, description, interests and profileLinks of the user.
  // As these are dynamic data, we create state variables to store them.
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState([]);
  const [currentInterest, setCurrentInterest] = useState("");
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  // useNavigate hook helps to navigate to different path in the application.
  const navigate = useNavigate();
  // Structure of the card object which will be passed as prop after user submits the data.
  const card = {
    name,
    description,
    interests,
    linkedinUsername,
    twitterUsername,
  };

  // This function is triggered when user has entered the data and wants to submit to create the card.
  const submitCard = async () => {
    // No field should be empty. User has to provide all details.
    if (
      name === "" ||
      description === "" ||
      interests.length === 0 ||
      linkedinUsername === "" ||
      twitterUsername === ""
    ) {
      alert("Please enter all details!");
      return;
    }
    // Once user has entered all the details, send a POST request to the /api/user/card endpoint.
    // The request sends the data in the form of card object.
    // The server will receive the request and store the data in DB.
    await fetch("/api/user/card", {
      method: "POST",
      // Include the data in the request. Convert the card object into a JSON string.
      body: JSON.stringify(card),
      // Indicate in headers that the request body is of JSON format.
      headers: { "Content-type": "application/json" },
    });
    // After the data has been submitted, reset the form.
    // On frontend, the fields will get reset. The data doesen't get reset as it is saved in DB.
    setLinkedinUsername("");
    setTwitterUsername("");
    // Navigate the user back to homepage.
    navigate("/");
  };

  const addInterest = () => {
    // If the user has entered the interest and it is not present in the interests array,
    // create a new array by merging the user entered value and the interests array.
    if (currentInterest && !interests.includes(currentInterest)) {
      setInterests(interests.concat(currentInterest));
      // Reset the interest field.
      setCurrentInterest("");
    }
  };

  const removeInterest = () => {
    // If the interests array is not empty, create a temporary array by spreading the interests array elements.
    // Remove the last interest using pop() method. This will modify the temporary array.
    // Now update the interests array with the temporary array.
    if (interests.length > 0) {
      const updatedInterests = [...interests];
      updatedInterests.pop();
      setInterests(updatedInterests);
      // Reset the interest field.
      setCurrentInterest("");
    } else {
      // If the array is empty, you cannot remove anything.
      alert("You don't have any interests! So boring.");
    }
  };

  return (
    <div className="addCard-div">
      <div className="addCard-align">
        <div className="addCard-box">
          <div className="input-div">
            <h1 className="addCard-heading">Add your card</h1>
            <div className="addCard-info">
              {/* The input fields are for taking the user details and then storing them in the state variables. */}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="addCard-info">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="addCard-info">
              <input
                type="text"
                placeholder="Interests"
                value={currentInterest}
                onChange={(e) => setCurrentInterest(e.target.value)}
              />
            </div>
            <button className="addInterest" onClick={addInterest} type="button">
              Add
            </button>
            <button
              className="removeInterest"
              onClick={removeInterest}
              type="button"
            >
              Remove
            </button>
            <div className="addCard-info">
              <input
                type="text"
                placeholder="LinkedIn Username"
                value={linkedinUsername}
                onChange={(e) => setLinkedinUsername(e.target.value)}
              />
            </div>
            <div className="addCard-info">
              <input
                type="text"
                placeholder="Twitter Username"
                value={twitterUsername}
                onChange={(e) => setTwitterUsername(e.target.value)}
              />
            </div>
            <div className="submitBtn-div">
              <button
                onClick={() => submitCard()}
                type="button"
                className="submitBtn"
              >
                Add Your E-Card
              </button>
            </div>
          </div>
        </div>
        <div className="showCard">
          <Card card={card} />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
