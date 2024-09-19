import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()
import {db} from "./util/FirebaseInit.js";
import { collection, getDocs } from "firebase/firestore";

const app = express();
const port = 1010;

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.get("/", async(req, res) => {
    res.send("Hello World");
});

app.get("/cointable", async (req, res) => {
    const collectionRef = collection(db, "cointable")
    const get_collection = await getDocs(collectionRef)
    const docs = []

    get_collection.forEach( (doc) => {
        docs.push(doc.data())
    })

    res.send(docs)
})

app.listen(port, () => {
    console.log("Port: ", port);
});