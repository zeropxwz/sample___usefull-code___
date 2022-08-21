


function searchMIN (list: Array<number>): number {

    let min = list[0]

    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i]
        }
    }

    return min
}


console.log(
    searchMIN([
        12,
        32,
        15,
        8,
        99,
        33,
        24,
        80
    ])
)