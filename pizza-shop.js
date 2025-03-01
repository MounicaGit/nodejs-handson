const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter{
    constructor() {
        super();
        this.orderNum = 0;
    }

    order(size, topping) {
        this.orderNum = this.orderNum + 1;
        this.emit('order', size, topping);
    }

    displayOrder() {
        console.log(`your order no. is ${this.orderNum}`)
    }
}

module.exports = PizzaShop;