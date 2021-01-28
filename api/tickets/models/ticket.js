// const mongoose = require('mongoose');
// import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

// interface TicketAttrs {
//   title: string;
//   price: number;
//   userId: string;
// }

// interface TicketDoc extends mongoose.Document {
//   title: string;
//   price: number;
//   userId: string;
//   version: number;
//   orderId?: string;
// }

// interface TicketModel extends mongoose.Model<TicketDoc> {
//   build(attrs: TicketAttrs): TicketDoc;
// }

// const ticketSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     userId: {
//       type: String,
//       required: true,
//     },
//     orderId: {
//       type: String,
//     },
//   },
//   {
//     toJSON: {
//       transform(doc, ret) {
//         ret.id = ret._id;
//         delete ret._id;
//       },
//     },
//   }
// );
// ticketSchema.set('versionKey', 'version');
// ticketSchema.plugin(updateIfCurrentPlugin);

// ticketSchema.statics.build = (attrs: TicketAttrs) => {
//   return new Ticket(attrs);
// };

// const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

// export { Ticket };

const mongoose = require('mongoose');
// const mongoose_update_if_current_1 = require("mongoose-update-if-current");

var ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
    },
    orderId: {
        type: String,
    }
});

// ticketSchema.set('versionKey', 'version');
// ticketSchema.plugin(mongoose_update_if_current_1.updateIfCurrentPlugin);
// ticketSchema.statics.build = function (attrs) {
//     return new Ticket(attrs);
// };

var Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = {
    Ticket
}
