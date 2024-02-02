import { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Cold Drink", value: 30 },
    // Add more items as needed
  ]);

  // Basic approach - Iterate through the array and add the cost of each item.
  // If there are more items, this can be a heavy operation.
  // This operation will be performed each time the app re-renders even if the items and the cost don't change.
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }

  // Best approach - Using useMemo hook to perform the operation and cache the value.
  // Wrap the operation inside useMemo hook. If the items or the cost changes, it will re-compute.
  // After computing, it will return the value instead of re-rendering. useMemo doesen't requires any state variable.
  const cost = useMemo(() => {
    let totalValue = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue += items[i].value;
    }
    return totalValue;
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {cost}</p>
    </div>
  );
};
