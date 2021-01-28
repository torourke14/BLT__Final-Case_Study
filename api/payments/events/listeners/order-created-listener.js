import { Message } from 'node-nats-streaming';
var events = require ('events');

//eventEmitter object
var eventEmitter = new events.EventEmitter()

const { getEventListeners, EventEmitter } = require('OrderCreatedEvent');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('OrderCreatedEvent', listener);
  getEventListeners(ee, OrderCreatedEvent); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('OrderCreatedEvent', listener);
  getEventListeners(et, 'OrderCreatedEvent'); // [listener]
}