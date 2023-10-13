const ap = require("appwrite");
const client = new ap.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64fb285b9baa664dbf3c");

const functions = new ap.Functions(client);
const singleProductCheckout = async (product) => {
  try {
    const execution = await functions.createExecution(
      "6527fc91532e011080a6",
      JSON.stringify({
        price: product.price.integerValue,
        description: product.description.stringValue,
        image: product.image.stringValue,
        title: product.title.stringValue,
        id:product.id
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
const singleProductCheckoutNoId = async (product) => {
  try {
    const execution = await functions.createExecution(
      "6527fc91532e011080a6",
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
      "6527fc91532e011080a6",
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
export { singleProductCheckout ,singleProductCheckoutNoId ,cartCheckOut};
