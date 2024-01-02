// Let's understand the fetch() function in JS. It is an asynchronous function provided by the browser.
// It is used to get data from an API provided. By default, it works as a GET request.
// It returns a promise which on resolving will give the the response from the URL.
// The promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar).
// The promise does not reject on HTTP errors like 404, 411, etc.

function getUserData() {
  // Using the fetch() function to get data from the specified API.
  // It returns a promise which when resolved will return another promise.
  // Resolve the second promise using .then() method to get the final response.
  // The second promise on resolving gives us data in json format. We store it in a variable named jsonData.
  fetch("https://fakerapi.it/api/v1/persons").then(function (response) {
    // The jsonData is the final response received from the API.
    response.json().then(function (finalData) {
      console.log(finalData);
    });
  });
}

async function getUserData() {
  // Make the function asynchronous using async keyword and then use await to get the response.
  // By awaiting the fetch() function, we get another asynchronous function.
  // Awaiting the asynchronous function gives us data in json format. We store it in a variable named jsonData.
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  // The jsonData is the final response received from the API.
  const finalData = response.json();
  console.log(finalData);
}
