import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// const Dashboard = lazy(() => import("./components/Dashboard"));
import Home from "./components/Home";
import Appbar from "./components/Appbar";
import "./App.css";

// Routing in web development refers to the process of navigating between different pages or views within a web application.
// When the websites were built using HTML, CSS and JS, on clicking a link, the browser made a request to the server, resulting in a page reload.
// The full page reload results in slower navigation because the browser needs to make a new request to the server, providing bad user experience.
// With full page reloads, the server needs to generate and send the entire HTML document for each new page request.
// This can increase load on the server incase of high traffic.

// To improve the user experience and reduce page reloads, we can create Single Page Applications with client-side routing.
// SPAs load a single HTML page and dynamically update the content as the user interacts with the application.
// Instead of fetching entire new HTML pages from the server, the SPA retrieves data from the server and uses it to update specific parts of the page.
// Using React, we can implement client-side routing to handle navigation within the same page without requiring a full page reload.
// Client-side routing enables developers to define routes and map them to specific components or views within the application.
// The rendering of content is handled by the user's web browser rather than on the server.
// This makes the user experience better since the browser can render content locally without making requests to the server for each interaction.

// React doesn't come with built-in routing capabilities, so we use React Router library.
// Once React Router is installed, we can use its components to define routes in our application.
// First thing to do is create a BrowserRouter and configure our first route. This will enable client side routing for our web app.
// Next comes Routes which acts as a container for multiple Route components. It defines the overall routing configuration for the app.
// Route is the most important part of a React Router app. It is used for mapping URL paths to specific components.
// Each Route has a path prop that specifies the URL pattern it matches.
// When the URL matches the path, the specified component renders within the application.

// For a large and big web application, loading unnecessary components decreases the performance.
// To optimize it, only load the essential components at the start of the application.
// The initial bundle size of the application can be reduced, resulting in faster load times for users.
// Non-essential components or resources can be loaded later, as needed, based on user interactions.
// This optimizes resource usage and ensures that users have a fast and responsive experience.

// Use the lazy function to dynamically import a non-essential component.
// Next, place the lazy-loaded component inside a Suspense component.
// It specifies fallback content to display while the component is being loaded, providing smooth and responsive user experiences.

function App() {
  // To prevent full page reload, React router has a hook called useNavigate.
  // It allows to navigate between different routes within the application without causing a full page reload.
  // const navigate = useNavigate();

  return (
    <>
      {/* This heading remains at the top on every page as it isn't part of routing. */}
      <h1>Vite + React</h1>
      {/* Before React, developers used window object for navigation. */}
      {/* But the problem was it resulted in a full page reload while navigating to a new page within the application. */}
      <h4>Without useNavigate</h4>
      <button
        // Redirecting the user to the landing page.
        onClick={() => {
          window.location.href = "/";
          // Using the useNavigate hook like this will give error because the hook cannot find the required context.
          // So, use the hook in the components inside the BrowserRouter.
          // navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        // Redirecting the user to the dashboard.
        onClick={() => {
          window.location.href = "/dashboard";
          // navigate('/dashboard')
        }}
      >
        Dashboard
      </button>
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* Without lazy loading. */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />

          {/* With lazy loading. */}
          {/* Use the Suspense component to handle the loading state. */}
          {/* <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading...">
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
