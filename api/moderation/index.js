const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// const redis = require("redis");
// const client = redis.createClient();

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
    console.log("Event Received:", req.body.type);
    const { type, data } = req.body;

    if (type === "OrderCreated") {
        let expiresAt = data.expiresAt;
        let now = new Date();
        let remainingTime = expiresAt - now;

        // expiration feature using setTimeout ------------------
        setTimeout(() => {
            axios.post("http://event-bus-clusterip-svc:4005/events", {
                type: "OrderCreated",
                data: {
                    userId: data.userId,
                    status: "Expired",
                    ticketId: data.ticketId,
                    expiresAt: data.expiresAt,
                },
            });
            clearTimeout(myTimer);
        }, remainingTime);

        // expiration feature using Redis ------------------
        // client.on("error", function (err) {
        //     console.log("Error " + err);
        // });

        // client.on("connect", () => {
        //     client.set("order status", "locked", redis.print);

        //     client.expire("order status", remainingTime);

        //     client.get("order status", function (err, reply) {
        //         if (reply) {
        //             console.log("Waiting payment");
        //         } else {
        //             axios.post("http://event-bus-clusterip-svc:4005/events", {
        //                 type: "OrderCreated",
        //                 data: {
        //                     userId: data.userId,
        //                     status: "Expired",
        //                     ticketId: data.ticketId,
        //                     expiresAt: data.expiresAt,
        //                 },
        //             });
        //             clearTimeout(myTimer);
        //             client.quit();
        //         }
        //     });
        // });
    }

    res.send({});
});

app.listen(4004, () => {
    console.log("Listening on 4004");
});
