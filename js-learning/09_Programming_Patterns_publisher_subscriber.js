//ПАТТЕРНЫ subscriber === handler === listener === watcher === observer


// store.subscribe(function (){}) //стор изменился
// button.addEventListener('click', function (){}) //кнопка была нажата
// setTimeout(function (){}, 2000) //прошло 2 секунды
//
// app.get('/users', function (){}) //роут был вызван
// fs.watch('1.txt', function (){}) //файл был изменен
// websocket.on('message', function (){}) //сообщение было отправлено/получено

//
// const button = {
//
//     subscribers: {
//         click: [],
//         focus: []
//     },
//
//     addEventListener(eventName, callback) {
//         button.subscribers[eventName].push(callback)
//         return () => {
//             button.removeEventListener(eventName, callback)
//         }
//     },
//
//     removeEventListener(eventName, callback) {
//         button.subscribers[eventName] = button.subscribers[eventName].filter((c) => c !== callback)
//     },
//
//     click() {
//         console.log('base click')
//         button.subscribers.click.forEach((callback) => callback() )
//     },
//
// }
//
//
// const handler = function (){
//     console.log('button click')
// }
//
// const unsubscribe = button.addEventListener('click', handler)
//
// button.click()
//
// unsubscribe()
// // button.removeEventListener('click', handler)
//
// button.click()


//СОБЫТИЯ

const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')
const link = document.querySelector('#linkId')


function handler(event) {

    // event.stopPropagation()
    // event.stopImmediatePropagation()
    console.log('target: ', event.target.id)
    console.log('currentTarget: ', event.currentTarget.id)
}
function linkHandler(event) {
    event.preventDefault()
    console.log('linkHandler')
}


link.addEventListener('click', linkHandler)
smallDiv.addEventListener('click', handler)
mediumDiv.addEventListener('click', handler)
bigDiv.addEventListener('click', handler)
