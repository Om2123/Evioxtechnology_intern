// this is appwrite backup data in case firebase quota gets exceeded
import { Client, ID } from 'appwrite';
import { Databases } from 'appwrite/types';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(String(process.env.PROJECT_ID))
    

const databases = new Databases(client);
const DATABASE_ID = String(process.env.DATABASE_ID);
const COLLECTION_ID = String(process.env.COLLECTIONS_ID);

const createProd = ({ idFDB, title, image, price, rating }) => {
    databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
            idFDB: idFDB,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    ).catch((er) => console.log(er.message))
        .then((res) => console.log(res));
}
const getProducts = () => {

    databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID
    ).catch((er) => console.log(er.message))
        .then((res) => {
            return res.documents
        });
}

export { createProd, getProducts };
