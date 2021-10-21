class Car {
    
    constructor(brand,speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate(num){
        this.speed+= num
        console.log(this.speed);
    }
    brake(num){
        this.speed -= num
        console.log(num);
    }
    describe(){
        console.log(`${this.brand} running at ${this.speed} km/h`);
    }

}

var renault = new Car('Renault', 0)
console.log(renault);

renault.accelerate(50)
renault.brake(25)
renault.describe()

var bugati = new Car('Verron',25)
bugati.accelerate(255)
console.log(bugati);

class Tv {
    constructor(brand,channel,volume){
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    volumPlus(num){

        if(num > 100){
            this.volume = 100
        }
        else{
            this.volume += num
        }
    }

    volumeLess(num){

        if(num < 0){
            this.volume = 0
        }
        else{
            this.volume -= num
        }
    }

    changeChannel(num){

        if(num < 1){
            this.channel = 1
        }
        else if (num > 50){
            this.channel = 50
        }
        else{
            this.channel = num
        }
    }

    reset(){
        this.volume = 50
        this.channel = 1
    }

    describe(){
        console.log(`Vous êtes sur le chaîne n°${this.channel} et le volume est à ${this.volume}`);
    }
}

var sony = new Tv('Sony',15,47)
sony.volumeLess(45)
console.log(sony);

// sony.changeChannel(52)
// console.log(sony);

// sony.describe()

// sony.reset()
// console.log(sony);
