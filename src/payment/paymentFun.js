const ap = require("appwrite");
const client = new ap.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.REACT_APP_PROJECT_ID);

const functions = new ap.Functions(client);
const singleProductCheckout = async (product) => {
  try {
    const execution = await functions.createExecution(
      "65280a409661d91e07ca",
      JSON.stringify({
        price: product.price,
        image: product.image,
        title: product.title,
        rating: product.rating,
        id:product.$id
      }),
      false,
      "/",
      "POST",
      { "X-Custom-Header": "123" }
    );
     return execution.responseBody;
  } catch (err) {
    console.error(err.message);
  }
};
const singleProductCheckoutNoId = async (product) => {
  try {
    const execution = await functions.createExecution(
      "65280a409661d91e07ca",
      JSON.stringify({
        price: product.price.integerValue,
        description: product.description.stringValue,
        image: product.image.stringValue,
        title: product.title.stringValue,
      }),
      false,
      "/",
      "POST",
      { "X-Custom-Header": "123" }
    );
    return execution;
  } catch (err) {
    console.error(err.message);
  }
};
const cartCheckOut = async (product) => {
  try {
    const execution = await functions.createExecution(
      "65280a409661d91e07ca",
      JSON.stringify({
       noOfItems:product.basket.length,
       sum:product.sumOfBasket,
      }),
      false,
      "/",
      "POST",
      { "X-Custom-Header": "123" }
    );
    return execution;
  } catch (err) {
    console.error(err.message);
  }
};
export { singleProductCheckout , singleProductCheckoutNoId ,cartCheckOut};
