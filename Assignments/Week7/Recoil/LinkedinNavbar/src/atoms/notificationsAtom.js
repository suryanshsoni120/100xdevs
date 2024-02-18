import axios from "axios";
import { atom, selector } from "recoil";

// Static Data Approach
// Let's first define the atoms individually for each of the 4 sections. Also provide a unique key and a default value.
// We can import these atoms in any file where we want to and then get their values using the useRecoilValue hook.
export const networksAtom = atom({
  key: "networksAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 2,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

// Using selector to find sum of values of the 4 atoms.
export const totalStaticNotificationSelector = selector({
  key: "totalStaticNotificationSelector",
  get: ({ get }) => {
    const networksAtomCount = get(networksAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationsAtomCount = get(notificationsAtom);
    return (
      networksAtomCount +
      jobsAtomCount +
      messagingAtomCount +
      notificationsAtomCount
    );
  },
});

// Dynamic Data Approach
// Let's first define an atom which will combined give value of the 4 sections. Also provide a unique key and a default value.
// Because we will fetch values from server, we can give initial value as 0. But this this not a good approach.
// Whenever the page will refresh, first the values will become 0 for small duration and then the server values will be shown.

// It would have been better if we could make the asynchronous calls to the server through atom itself.
// But that isn't possible because the default value of an atom cannot be asynchronous.
// Instead, we can set a selector as default value because selectors can be asynchronous.
// When using a selector, the default atom value will remain dynamic.
// Inside the get property, pass an asynchronous function which will fetch the server to get the values.
// We can import these atoms in any file where we want to and then get their values using the useRecoilValue hook.
export const linkedinAtomGroup = atom({
  key: "linkedinAtomGroup",
  default: selector({
    key: "linkedinAtomGroupSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

// Using selector to find sum of values of the 4 atoms.
export const totalDynamicNotificationSelector = selector({
  key: "totalDynamicNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(linkedinAtomGroup);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
