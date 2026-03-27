const todolistId_1 = crypto.randomUUID()
const todolistId_2 = crypto.randomUUID()

let todolists = [

    {
        id: todolistId_1,
        title: "What to learn",
        filter: "all",
        tasks: [
            { id: crypto.randomUUID(), title: "HTML", isDone: false },
            { id: crypto.randomUUID(), title: "CSS", isDone: true },
            { id: crypto.randomUUID(), title: "JS/TS", isDone: true },
        ]
    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: "all",
        tasks: [
            { id: crypto.randomUUID(), title: "Milk", isDone: false },
            { id: crypto.randomUUID(), title: "Bread", isDone: true },
        ]
    }
]
const getProp = (userName) => "superUser_" + userName

    let tasks = {
        [todolistId_1] : [
            { id: crypto.randomUUID(), title: "HTML", isDone: false },
            { id: crypto.randomUUID(), title: "CSS", isDone: true },
            { id: crypto.randomUUID(), title: "JS/TS", isDone: true },
        ],
        [todolistId_2] : [
            { id: crypto.randomUUID(), title: "Milk", isDone: false },
            { id: crypto.randomUUID(), title: "Bread", isDone: true },
        ],

        [getProp('Bob')]:{}
    }

    for (const key in todolists[0]) {
        console.log(todolists[0][key])
    }


    const map = new Map()
map.set(true,[1,2,3,4])
map.set(100,'ето много')
map.set(getProp,'Alex')

const array = [1,21,3,13,21,8,13,45,21,12,13,21,12,21,13,21,12,13,1]
const set = new Set(array)
const uniqArray = [...set]

function creareTodolist (title) {
        const new_id = crypto.randomUUID()
    const newTodo ={
            id: new_id,
            title: title,
            filter: "all",
    }
    const newState = [...todolists,newTodo]
    /// set
    todolists = newState

    const nexTasksState  = {...tasks, [new_id]: []}
    /// set
    tasks = nexTasksState
}
creareTodolist('12313213')