// class Car{
//     constructor(brand, model, color, km, fuel){

//         this.brand = brand
//         this.model = model
//         this.color = color
//         this.turnedOn = false
//         this.km = km
//         this.fuel = fuel
//         this.tank = 0
  
//     }
//     static fullTank = false

//     get info(){
//         console.log('Brand...........: ' + this.brand)
//         console.log('Model...........: ' + this.model)
//         console.log('Color...........: ' + this.color)
//         console.log('State...........: ' + (this.turnedOn?'Turned On':'Turned Off'))
//         console.log('KM..............: ' + this.km)
//         console.log('Fuel............: ' + this.fuel)
//         console.log('Tank............: ' + this.tank + '%')

//     }
//     turnKey(){
//         if(this.turnedOn){
//             this.turnedOn = false
//         }else{
//             this.turnedOn = true
//         }
//     }

//     drive(){
//         console.log('You\'re driving a ' + this.brand + ' ' + this.model)
//     }

//     set fuelTank(percentage){
//         this.tank = percentage
//     }
// }
// let carro1 = new Car('Honda', 'Fit', 'Black', 122.000, 'Gasoline/Alcohol')
// let carro2 = new Car("Ford", "Focus", "Blue", 60000, "Alcohol");
// let carro3 = new Car("Honda", "Civic", "Black", 75000, "Gasoline");
// let carro4 = new Car("Volkswagen", "Golf", "White", 40000, "Diesel");
// let carro5 = new Car("Toyota", "Corolla", "Silver", 50000, "Gasoline");

// carro2.fuelTank = 50
// carro2.info

class Car{
    constructor(fuelType){
        this.fuelType = fuelType
    }
}
class CombatCar extends Car{
    constructor(){
        super('Diesel')
    }
}
let c1 = new CombatCar()
console.log(c1)
