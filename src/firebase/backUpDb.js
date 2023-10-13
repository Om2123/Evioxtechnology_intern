// this is appwrite backup data in case firebase quota gets exceeded
const appw = require("appwrite");
const client = new appw.Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.REACT_APP_PROJECT_ID);

const databases = new appw.Databases(client);
const DATABASE_ID = String(process.env.REACT_APP_DATABASE_ID);
const COLLECTION_ID = String(process.env.REACT_APP_COLLECTIONS_ID);

const createProd = ({ idFDB, title, image, price, rating }) => {
  databases
    .createDocument(DATABASE_ID, COLLECTION_ID, appw.ID.unique(), {
      idFDB: idFDB,
      title: title,
      image: image,
      price: price,
      rating: rating,
    })
    .catch((er) => console.log(er.message))
    .then((res) => console.log(res));
};
const getProducts = async() => {
    let doc ;
    await databases
    .listDocuments("6527a824b10c47d16d38", "pl2123")
    .catch((er) => console.log(er))
    .then((res) => {
        doc = res.documents;
     });
    return doc;
};

export { createProd,databases, getProducts };
