//this
//ЧТО ТАКОЕ THIS??? - ключевое слово, которое ссылается на объект в контексте которого была вызвана функция

// 1. Global scope
// 2. Function
// 3. call, apply bind
// 4. Function constructor

/*const a = () => {
    console.log(this)
}
a()

function foo() {
    // this = window
    const a = function () {
        console.log(this) //
    }
    a()
}
foo()*/

/*
const user = {
    firstname: "John",
    showName: () =>{
        console.log(this.firstname)
    }
}
user.showName()
*/
/*
function  foo() {
    const a = () =>{
        console.log(this)
    }
    a()
}
foo()*/

/*const user = {
    firstname: 'John',
    surname: ()=>{
        const a = () =>{
            console.log(this)
        }
        a()
    }
}
 user.surname()*/
/*function fff() {

    const user = {
        firstName: 'Dima',
        showName: () => {
            const a = () => {
                console.log(this)
            }
            a()
        }
    }

    return user
}

const obj1 = fff()
obj1.showName()*/

/*
var maxSpeed = 100

const car = {
    color: 'red',
    maxSpeed: 200,
    shoMaxSpeed: () => {
        console.log(this.maxSpeed)
    }
}

car.shoMaxSpeed()
*/

/*let car = {
    color: 'red',
    maxSpeed: 200,
    shoMaxSpeed() {
        console.log(car.maxSpeed)
    }
}

const car2 = car

car2.shoMaxSpeed()*/


// const car = {
//   color: 'red',
//   maxSpeed: 200,
//   shoMaxSpeed() {
//     // this = car
//     console.log(this.maxSpeed)
//   }
// }

// car.shoMaxSpeed()


/*function startEngine() {
    console.log(`start ${this.brand}`)
}

const car1 = {
    brand: 'bmw'
}

const car2 = {
    brand: 'kia'
}

car1.func = startEngine
car2.func = startEngine

car1.func()
car2.func()*/


/*
let car3 = {
    color: 'red',
    showColor : ()=>{
        console.log(this.color)
    }
}

car3.showColor()
*/


/*let car3 = {
    color: 'red',
    showColor() {
        (
            () => {
                console.log(this.color)
            }
        )()
    }
}*/

/*
car3.showColor()*/

/*
const car = {
    brand: 'bmw',
    speed: 200,
    showMaxSpeed () {
        console.log(this.speed)
    }
}

setTimeout(()=>car.showMaxSpeed(), 2000)

function setTimeout(callback,timer) {
    callback()
}*/
/*

function CarCreator (brand) {
    this.brand = brand;
}

const bmw = new CarCreator('bmw');
const kia = new CarCreator('kia');

console.log('bmw')
console.log('kia')
CarCreator('honda')
*/



/*
const dialer = {
    name: 'Toyota',
    models: ['Yaris', 'Corolla', 'Prado'],

    showModelsInDialer() {
       const ShowModel = function (model) {
            console.log(`Dialer: ${this.name}, have: ${model}`)
        }
        this.models.forEach( ShowModel.bind(this) )
    },
}

dialer.showModelsInDialer()*/
function foo() {
    const x = 10

    return {
        x: 20,
        func1: function () {
            console.log(this.x)
        },
        func2: () => {
            console.log(this.x)
        }
    }
}

const obj1 = foo()

obj1.func1() // ?
obj1.func2() // ?

const obj2 = foo.call({x:30})
obj2.func1() // ?
obj2.func2() // ?*/

/*function test() {
    const name = 'Alex'

    return {
        name: 'Ivan',

        show1: function () {
            console.log(this.name)
        },

        show2: () => {
            console.log(this.name)
        },

        show3: function () {
            const inner = () => {
                console.log(this.name)
            }
            inner()
        }
    }
}

const obj = test()

obj.show1() // ? Ivan
obj.show2() // ? undefined
obj.show3() // ? undefined*/


function makeUser() {
    return {
        name: 'Alex',

        show1: function () {
            console.log(this.name)
        },

        show2: function () {
            function inner() {
                console.log(this.name)
            }
            inner()
        },

        show3: function () {
            const inner = function () {
                console.log(this.name)
            }
            inner()
        },

        show4: function () {
            const inner = () => {
                console.log(this.name)
            }
            inner()
        }
    }
}

const user = makeUser()

user.show1() // ? Alex
user.show2() // ? undefined
user.show3() // ?
user.show4() //  Alex
