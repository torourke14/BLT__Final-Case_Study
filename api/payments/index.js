const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@e-tickets-cluster.ovpau.mongodb.net/${process.env.MONGO_PAYMENTS_DB}?retryWrites=true&w=majority`
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const paymentsByPostId = {};
//posting new payments
app.post('/api/payments', 
    requireAuth,
    [
        body('token')
        .not()
        .isEmpty(),
        validateRequest,
    ], 
async (req, res, next) => {
    console.log("payment endpoint!")
        const {token, orderId } = req.body;

        const order = await Order.findByID(orderID);

        if (!order) {
            throw new NotFoundError();
        }
        if (order.userId !== currentUser.id) {
            throw new NotAuthorizedError();
        }
        if (order.status === OrderStatus.Cancelled){
            throw new BadRequestError('Cannot pay for an Cancelled order.');
        }

        res.send({ sucesss: true });
    }
);

app.listen(4002, () => {
  console.log('Listening on 4002');
});
