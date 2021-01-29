import mongoose from 'mongoose'

const OrderAttrs = new mongoose.Schema ({
    id: 'string',
    version: number,
    userID: 'string',
    price: number,
    status: OrderStatus,
})

const OrderDoc = new OrderAttrs();

const orderSchema = new mongoose.Schema ({
    userId: {
        type: 'string',
        required: true,
    },
    price: {
        type: number,
        required: true,
    },
    status: {
        type: 'string',
        required: true,
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

orderSchema.statistics.build = (attrs) => {
    return new Order ({
        _id: attrs._id,
        version: attrs.price,
        userId: attrs.userId,
        status: attrs.status
    })
}

const Order = mongoose.model('Order', orderSchema);

export{ Order };