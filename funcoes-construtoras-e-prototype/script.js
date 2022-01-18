const p1 = {
    name: "computador",
    price: 3000.00,
    quantity: 2
}

const product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

product.prototype.total = function(){
    return this.price * this.quantity;
}

product.prototype.add = function(amount){
    return this.quantity += amount;
}

product.prototype.remove = function(amount){
    if(this.quantity >= amount)
    return this.quantity -= amount;
}

product.prototype.label = function(){
    return "Dados:" + this.name +","+this.price;
}

const p2 = new product("Monitor", 800.0, 10);

const p3 = new product("Mouse", 50.0, 4);
