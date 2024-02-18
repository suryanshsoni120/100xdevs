import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>With useNavigate</h4>
      <button
        // Redirecting the user to the landing page.
        onClick={() => {
          // Using the useNavigate hook for navigation.
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        // Redirecting the user to the dashboard.
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};

export default Appbar;
