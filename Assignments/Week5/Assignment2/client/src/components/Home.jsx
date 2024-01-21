import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  // Defining the state to keep track of the cards defined. It will store all the cards that have been created.
  const [cards, setCards] = useState([]);

  // Send a request to the /api/user/cards endpoint. The server receives the request and then returns the data at the endpoint.
  // It is an asynchronous operation and returns a promise.
  // The promise resolves to give the response object which is actually the data received from the endpoint.
  // The data is the card details that the user has entered on frontend.
  // Update the cards array with the data by using setCards function.
  // Now the cards array will have the cards created by different users.
  useEffect(() => {
    fetch("/api/user/cards").then(async function (res) {
      const data = await res.json();
      setCards(data);
    });
  }, []);

  return (
    <>
      <h1>Welcome to the Cards Application</h1>
      <div className="createCardOuter">
        <div className="createCardInner">
          <Link to="/create" className="createCard">
            {/* The button is defined inside the Link component.
          Once use clicks the button, he will be taken to the /card Route.*/}
            <button className="createCardBtn">Create your own Card</button>
          </Link>
        </div>
      </div>
      <div className="allCardsContainer">
        <div className="allCards">
          {/* Render the card component by passing the props. */}
          {cards.map((card) => {
            return <Card key={card._id} card={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
