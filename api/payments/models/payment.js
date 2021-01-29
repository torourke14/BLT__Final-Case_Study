import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
    {
      orderId: {
        required: true,
        type: String,
      },
      stripeId: {
        required: true,
        type: String,
      },
    },
    {
      toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
        },
      },
    }
  );

  var paymentModel = mongoose.model('paymentModel', PaymentSchema);
  export { Payment };