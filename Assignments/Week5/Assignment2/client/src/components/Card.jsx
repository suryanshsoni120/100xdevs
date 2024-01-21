// This is the card component showing the user profile.
// In App.jsx file, we had passed props while rendering the Card component.
// So here, we have to get those props by destructuring them.
// As the interests are stored in an array, we use map() method to iterate and show each interest differerntly.
// Use target="_blank" and rel="noreferrer" so that link opens in new tab whenever user clicks it.

const Card = ({ card }) => {
  const { name, description, interests, linkedinUsername, twitterUsername } =
    card;

  // Defining the social media links. Just add the usernames in the link.
  const linkedinUrl = `https://www.linkedin.com/in/${linkedinUsername}`;
  const twitterUrl = `https://twitter.com/${twitterUsername}`;

  return (
    <div className="cardContainer">
      <div className="card">
        <h1 className="name">{name}</h1>
        <div className="description">{description}</div>
        <div className="interests-div">
          <b className="interestHeading">Interests</b>
          {/* Itereate the interests array to show each interest to the user on frontend. */}
          <ul className="interestsList">
            {interests.map((interest) => (
              <li key={interest} className="interestItem">
                {interest}
              </li>
            ))}
          </ul>
        </div>
        <div className="profileLinks">
          {/* Anchor tag to direct to the user's profile once clicked. */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedinLink"
          >
            LinkedIn
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="twitterLink"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
