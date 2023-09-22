class Computer{
    constructor(make,model,price){
        this.make=make;
        this.model=model;
        this.price= price;
    }
    
    summarise(){
        console.log(`This ${this.make} ${this.model} cost $${this.price}.`)
    }
    
    getPrototype(){
        console.log(Object.getPrototypeOf(this))
        
    }
}
const computer1= new Computer('Apple','Macbook',1800)
computer1.summarise();
computer1.getPrototype()