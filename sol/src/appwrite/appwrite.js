import { Client, Databases, Storage, ID, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("651fc2a146f4a7b22933");

const account = new Account(client);
const databases = new Databases(client);
const DATABASE_ID = "651fc48acc7ea07dc181";
const COLLECTION_ID = "651fc4985545f0842e54";

const storage = new Storage(client);
const BUCKET_ID = "651fc5698e0af2551097";

// athentication

const CreateUser = async (email, password) => {
  const user = await account
    .create(ID.unique(), email, password, email)
    .then(function (response) {
      console.log(response);

      logIn(email, password);
    })
    .catch(function (error) {
      console.log(error);
    });
};
const logIn = async (email, password) => {
  const promise = account.createEmailSession(email, password);
  promise
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

// database operations
const createCourse = (cName, cAuthor, mp4) => {
  const promise = databases
    .createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
      courseName: cName,
      courseAuthor: cAuthor,
    })
    .catch((err) => {
      console.log(err.message);
    })
    .then((resd) => {
      console.log(resd);
      if (resd) {
        storage
          .createFile(BUCKET_ID, resd.$id, mp4)
          .then((res) => {
            console.log(res.$id , resd.$id);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
};

export { CreateUser, logIn,storage,databases, createCourse };
