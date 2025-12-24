let a = [
    "Initializing hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2...",
    "Connected successfully...",
    "Username iamRanjit...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successfully..."
]

const sleep = async (seconods) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconods * 1000);
    })
}

const showHack = async (messages) => {
    await sleep(2)
    console.log(messages)
    text.innerHTML = text.innerHTML + messages + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
    }
})()
