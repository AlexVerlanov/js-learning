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

function  foo() {
    const a = () =>{
        console.log(this)
    }
    a()
}
foo()















