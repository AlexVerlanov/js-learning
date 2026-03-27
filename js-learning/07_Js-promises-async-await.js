const getData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res("some data");
            // rej("some error");
        }, 1000);
    });

/*
getData()
    .then((data) => {
        console.log("then1", data);
        return new Promise((res, rej) => {
            setTimeout(() => {
                // res("some data from request2");
                rej("some error");
            }, 2000);
        });
    })
    .then((data) => {
        console.log("then2", data);
        return 20;
    })
    .catch((data) => {
        console.log("catch1", data);
        // return;
    })
    .then((data) => {
        console.log("then3", data);
        return b;
    })
    .then((data) => {
        console.log("then4", data);
        return 40;
    })
    .catch((data) => {
        console.log("catch2", data);
        return 50;
    })
    .finally((data) => {
        console.log("finally", data);
        return 60;
    })
    .then((data) => {
        console.log("then5", data);
    });*/
console.log(3)

async function globalAsync() {
    async function search() {
        try {
            console.log(1)

            const yahooData = await fetch('https://yahoo.com/?query=js')
            console.log(yahooData.url)

            const bingData = await fetch('https://bing.com/?query=js').then(() => {})
            console.log(bingData)

            const googleData = await fetch('https://google.com/?query=js')
            console.log(googleData.url)

            console.log(4)
            return 5
        } catch (error) {
            console.log('CATCH!!!!!')
            console.log(error)
            return null
        }
    }

    const result = search()
    console.log(result, '!!!!!!!!!')
}

globalAsync()