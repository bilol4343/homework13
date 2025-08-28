class Product{
    static productCount = 0
    
    constructor (id,name,price){
        this.id = id
        this.name = name
        this.price = price
        Product.productCount ++
    }

    totalPrice(){
        return this.price
    }
}

class careProduct extends Product{
    constructor(id,name,price,warrantyPeriod){
        super(id,name,price)
        this.warrantyPeriod = warrantyPeriod
    }
    totalPrice(){
        let discount = 0

        if (this.warrantyPeriod === 5 ) discount =  0.1
        else if (this.warrantyPeriod === 4) discount = 0.2;
        else if (this.warrantyPeriod === 3) discount = 0.3;
        else if (this.warrantyPeriod === 2) discount = 0.4;
        else if (this.warrantyPeriod === 1) discount = 0.5;

        return this.price * (1 - discount);
        
    }
}

let p1 = new careProduct (1,"Pepsi",8000,4)
console.log(p1.name,"price:",p1.totalPrice())

let p2 = new Product (2,"Cola 1.5", 15000,15)
console.log(p2.name,"price: ",p2.totalPrice())

let p3 = new careProduct (3,"Kasha",150000,2)
console.log(p3.name,"price: ",p3.totalPrice())



console.log("Overall product count: ", Product.productCount)