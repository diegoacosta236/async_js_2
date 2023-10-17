// Fetching code
// Create a Promise using the fetch function to make an HTTP request to a URL.
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  // Log the fetchPromise object. Note that fetchPromise is a Promise and not the actual response data.
  console.log(fetchPromise);
  
  // Attach a callback to the fetchPromise that runs when the Promise is resolved (request is complete).
  fetchPromise.then((response) => {
    // Log the status code of the received response from the server.
    console.log(`Received response: ${response.status}`);
  });
  
  // Log a message to indicate that the request has started.
  console.log("Started request…");

//  Example of catching an error. Very useful feature.

// Create a Promise using the fetch function to make an HTTP request to a URL.
const fetchPromise2 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// Handle the response when the Promise is resolved (successful HTTP request).
fetchPromise
  .then((response) => {
    // Check if the response is not OK (status code outside the 200-299 range).
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Parse the response as JSON and return it as the next Promise.
    return response.json();
  })
  .then((data) => {
    // Access and log the name property of the first item in the JSON data.
    console.log(data[0].name);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch or processing.
    console.error(`Could not get products: ${error}`);
  });

// Example of the async code. 

// Define an asynchronous function named fetchProducts.
async function fetchProducts() {
    try {
      // Make an HTTP request using the fetch() function and wait for it to be settled.
      // It will either return a Response or throw an error.
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
  
      // Check if the response status is not OK (outside the 200-299 range).
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      // Wait for the response data to be parsed as JSON using await.
      // It will either return the parsed JSON object or throw an error.
      const data = await response.json();
  
      // Log the 'name' property of the first item in the JSON data.
      console.log(data[0].name);
    } catch (error) {
      // Handle any errors that may occur during the fetch or JSON parsing.
      console.error(`Could not get products: ${error}`);
    }
  }
  
  // Call the fetchProducts function to initiate the data retrieval process.
  fetchProducts();
