// =====================================================
// JAVASCRIPT EVENT LOOP PRACTICE
// What I’m learning:
// - synchronous code
// - call stack
// - microtasks
// - macrotasks
// - Promise
// - async / await
// - setTimeout
// =====================================================



// =====================================================
// EXAMPLE 1
// =====================================================
// Goal:
// Understand the order of:
// - synchronous code
// - Promise.then (microtasks)
// - async/await
// - setTimeout (macrotasks)
// =====================================================

// 1) Synchronous code runs immediately
console.log(1)

// 2) setTimeout callback goes to macrotask queue
setTimeout(() => {
    console.log(2)

    // 3) Promise.then inside setTimeout goes to microtask queue
    Promise.resolve().then(() => {
        console.log(3)
    })

    // 4) Nested setTimeout -> another macrotask
    setTimeout(() => {
        console.log(4)
    }, 0)
}, 0)

// 5) Promise.then -> microtask
Promise.resolve()
    .then(() => {
        console.log(5)
    })
    .then(() => {
        // 6) This .then runs after previous microtask is completed
        console.log(6)
    })

async function runExample1() {
    // 7) Synchronous part of async function runs immediately
    console.log(7)

    // await pauses function and continuation goes to microtask queue
    await null

    // 8) This runs later as microtask
    console.log(8)

    // 9) New microtask created inside resumed async function
    Promise.resolve().then(() => {
        console.log(9)
    })
}

runExample1()

new Promise((res) => {
    // 10) Promise executor runs synchronously immediately
    console.log(10)

    res()

    // 11) Still synchronous, runs before .then
    console.log(11)
}).then(() => {
    // 12) .then callback -> microtask
    console.log(12)
})

// 13) Last synchronous line
console.log(13)

/*
Expected order:
1, 7, 10, 11, 13, 5, 8, 12, 6, 9, 2, 3, 4

Why:
1. All synchronous code runs first
2. Then all microtasks run
3. Then macrotasks (setTimeout)
*/



// =====================================================
// EXAMPLE 2
// =====================================================
// Very similar example to reinforce Event Loop understanding
// =====================================================

// 1) Synchronous
console.log(1)///

// setTimeout -> macrotask
setTimeout(() => {
    console.log(2)
    // Promise.then inside timeout -> microtask
    Promise.resolve().then(() => {
        console.log(3)
    })
}, 0)

// Promise chain -> microtasks
Promise.resolve()
    .then(() => {
        console.log(4)//
    })
    .then(() => {
        console.log(5)
    })

async function runExample2() {
    // synchronous part of async function
    console.log(6)//

    // pause async function, continue later as microtask
    await Promise.resolve()

    console.log(7)///

    // new microtask created after async continuation
    Promise.resolve().then(() => {
        console.log(8)
    })
}
runExample2()
new Promise((resolve) => {
    // Promise executor runs synchronously
    console.log(9)         /////

    resolve()
    console.log(10)////
}).then(() => {
    // .then -> microtask
    console.log(11)//
})

// last synchronous line
console.log(12)///

/*
Expected order:
1, 6, 9, 10, 12, 4, 7, 11, 5, 8, 2, 3
*/

console.log(1)////

setTimeout(() => {
    console.log(2)//

    Promise.resolve().then(() => {
        console.log(3)//
    })
}, 0)

Promise.resolve()
    .then(() => {
        console.log(4) ///
        return Promise.resolve()
    })
    .then(() => {
        console.log(5) ///                                                   M | m 187
    })

async function run() {
    console.log(6)///

    await null

    console.log(7) //

    setTimeout(() => {
        console.log(8)
    }, 0)

    Promise.resolve().then(() => {
        console.log(9)///
    })
}

run()

new Promise((resolve) => {
    console.log(10)//
    resolve()
})
    .then(() => {
        console.log(11)//
    })
    .then(() => {
        console.log(12)//
    })

console.log(13)//

// =====================================================
// KEY TAKEAWAYS
// =====================================================
//
// 1) Synchronous code always runs first
//
// 2) Promise.then / catch / finally go to MICROTASK queue
//
// 3) await also continues in MICROTASK queue
//
// 4) setTimeout goes to MACROTASK queue
//
// 5) Microtasks always run BEFORE macrotasks
//
// 6) Promise executor runs synchronously immediately
//
// =====================================================