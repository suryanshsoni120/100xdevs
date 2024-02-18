import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import {
  networksAtom,
  jobsAtom,
  notificationsAtom,
  messagingAtom,
  linkedinAtomGroup,
  totalStaticNotificationSelector,
  totalDynamicNotificationSelector,
} from "../atoms/notificationsAtom";

const Navbar = () => {
  const networksAtomValue = useRecoilValue(networksAtom);
  const jobsAtomValue = useRecoilValue(jobsAtom);
  const messagingAtomValue = useRecoilValue(messagingAtom);
  const notificationsAtomValue = useRecoilValue(notificationsAtom);
  const linkedinAtomValue = useRecoilValue(linkedinAtomGroup);

  // Using state variable to store the notifications count.
  // const [notificationsCount, setNotificationsCount] = useState({});

  // Fetch the server to get the values.
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
  //     setNotificationsCount(res.data);
  //   });
  // }, []);

  // Finding total values just by adding the values of these 4 sections.
  // This is not a good approach as if the values don't change, still React re-computes the value when re-rendered.
  // const totalNotificationsValue =
  //   networksAtomValue +
  //   jobsAtomValue +
  //   messagingAtomValue +
  //   notificationsAtomValue;

  // Slight better approach by using the useMemo hook.
  // const totalNotificationsMemoValue = useMemo(() => {
  //   return (
  //     networksAtomValue +
  //     jobsAtomValue +
  //     messagingAtomValue +
  //     notificationsAtomValue
  //   );
  // }, [
  //   networksAtomValue,
  //   jobsAtomValue,
  //   messagingAtomValue,
  //   notificationsAtomValue,
  // ]);

  // For more better approach, make use of selectors provided by Recoil.
  // Value will change only if any atom's value changes.
  // This method is much better because in future if there's any new parameter that depends on totalNotificationsCount, we can directly use this variable.
  // Incase of useMemo, this wasn't possible.
  const totalStaticNotificationCount = useRecoilValue(
    totalStaticNotificationSelector
  );

  // Selector to get the dynamic data rom the server.
  const totalDynamicNotificationsCount = useRecoilValue(
    totalDynamicNotificationSelector
  );

  return (
    <>
      {/* Using individual section atoms. */}
      <div>
        <h3>Static Data</h3>
        <button>Home</button>
        <button>
          My network ({networksAtomValue >= 100 ? "99+" : networksAtomValue})
        </button>
        <button>Jobs ({jobsAtomValue})</button>
        <button>Messaging ({messagingAtomValue})</button>
        <button>Notifications ({notificationsAtomValue})</button>
        <button>Me ({totalStaticNotificationCount})</button>
      </div>

      {/* Using a single atoms */}
      <div>
        <h3>Dynamic Data</h3>
        <button>Home</button>
        <button>
          My network (
          {linkedinAtomValue.network >= 100 ? "99+" : linkedinAtomValue.network}
          )
        </button>
        <button>Jobs ({linkedinAtomValue.jobs})</button>
        <button>Messaging ({linkedinAtomValue.messaging})</button>
        <button>Notifications ({linkedinAtomValue.notifications})</button>
        <button>Me ({totalDynamicNotificationsCount})</button>
      </div>
    </>
  );
};

export default Navbar;
