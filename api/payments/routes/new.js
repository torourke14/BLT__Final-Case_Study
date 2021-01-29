import express, { Request, Response } from 'express';
import { body } from 'express-validator';
const router = require('express').Router();
const { paymentSchema } = require('../models/payments');

import {
    requireAuth,
    NotAuthorizedError,
    OrderStatus,
    validateRequest,
    BadRequestError,
    NotFoundError
} from 'tickets/common';
import { Order } from '../models/order';
import { stripe } from '../stripe'; 

const router = express.Router();

router.post('/api/payments', 
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


export { router as createChargeRouter };