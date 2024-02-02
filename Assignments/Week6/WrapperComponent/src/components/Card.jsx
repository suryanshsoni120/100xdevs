const Card = ({ innerComponent }) => {
  return (
    <div style={{ border: "2px solid black", padding: "1rem" }}>
      {innerComponent}
    </div>
  );
};

export default Card;
