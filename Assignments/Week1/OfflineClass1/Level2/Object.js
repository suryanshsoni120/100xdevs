// Objects in JS are in form of key-value pairs.
// Keys are always unique while values of different keys can be same.
// Object Methods Explanation
function objectMethods(obj) {
  // Get the whole object.
  console.log("Original Object:", obj);

  // Get the keys present in the object.
  // Return an array of all the keys.
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // Get the values present in the object.
  // Return an array of all the values.
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // Get the key-value pairs present in the object.
  // Returns an array of each key-value pair.
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // Check if there's a key named hasOwnProperty.
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  // Add a new key named newProperty with the value newValue
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
