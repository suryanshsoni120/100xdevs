import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar";
import "./App.css";

// This is a basic layout of the Linkedin navbar with state management using Recoil.
// After having basic understanding of Recoil in the couter app, let's get a good hold of Recoil by building the navbar.
// The navbar would have the menu of Home, My network, Jobs, Messaging, Notifications and Me.
// Except the Home section, all other menus should show the values. All these values will be fetched from the server.
// The Me section will show the sum of all the notification values.
// Server link: https://sum-server.100xdevs.com/notifications.

// For our application, we first define a Navbar component within which there will be buttons and the notification values.
// In the Navbar component, we will have 6 buttons with the text of Home, My network, Jobs, Messaging, Notifications and Me.
// Next, to show the values of notifications of each button, we could have used useState hook if there was no Recoil library.
// Define the state variable for each button and update the values received from the server.
// But useState results in unnecessary re-rendering which is not good. So, we use the Recoil library.
// For using Recoil, let's create atoms for the 4 sections with some dummy values.
// Each atom will manage the notification value of its particular section.
// For the Me section, we will just add the values of these 4 sections and render it on the button.
// But the problem is even if the values don't change, still React re-computes the value when re-rendered.
// To prevent this, we can use the useMemo hook which will return the sum and have the notification values as dependencies.
// This is a slight better approach. To improve it, we can use selectors that are provided by Recoil.
// Selectors are functions that compute derived state based on the current state of one or more atoms.
// Here, there are 4 atoms from which we will get the value and then add them to get total notifications count.
// So, we use a selector that will compute the sum based on the current values of atoms.
// This was easy as we had dummy static data. Things would be different if we want to get data from server.

// To get values from a server, basic approach would be to create a state for notifications count and make request to server and update state variable.
//

function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Linkedin Navbar</h1>
        <Navbar />
      </RecoilRoot>
    </>
  );
}

export default App;
