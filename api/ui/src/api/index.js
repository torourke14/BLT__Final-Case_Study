const express = require('express')
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.


// Connection URL
// var url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();

// api/tickets
export const getTickets = () =>{
    app.get("/api/tickets", async (req, res) => {
        try {
            await client.connect();
            const DB_NAME = "test"
            const DATA_NEEDED = "tickets"
            const database = client.db(DB_NAME);
            const collection = database.collection(DATA_NEEDED);
            const cursor = await collection.find()
            // print a message if no documents were found
            if ((await cursor.count()) === 0) {
                console.log("No documents found!");
            }
            await cursor.forEach(console.dir);
    
        } catch (error) {
            throw error;
            res.json(error);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    
    })
}
