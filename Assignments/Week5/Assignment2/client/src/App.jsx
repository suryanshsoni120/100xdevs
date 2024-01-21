// Our application has 2 routes: one for creating card and other to view the cards.
// We define the route structure here as this file is the main entry point of the application.
// Use the react-router-dom library to get the necessary components used for routing.
// In any frontend routing application, the important components are BrowserRouter, Routes, Route.

// BrowserRouter is used for implementing client-side routing in a React application.
// Inside BrowserRouter, we wrap the entire application.
// It uses the HTML5 History API to manage navigation history.
// It enables the application to update UI based on the current URL without triggering a full page reload.
// This provides a smoother and more dynamic user experience.
// It also provides a context for routing to navigate between different views/routes without triggering a full page reload.

// Routes component is used to define the routes of the application.
// It declares how the application UI should be updated based on the current URL.
// Inside Routes, there are multiple Route components, each having a specific path.
// Route denotes the React component that should be rendered when the associated path is matched.
// Routes are matched in the order they are declared. The first matching route is the one whose component will be rendered.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./components/AddCard";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* When the application will start, the user will first see the Home component. */}
          <Route path="/" element={<Home />} />
          {/* When user goes to /card Route, then AddCard component will get rendered. */}
          <Route path="/create" element={<AddCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
