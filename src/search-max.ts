




function searchMAX (list: Array<number>): number {

    let max = list[0]

    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }

    return max
}

console.log(
    searchMAX([
        12,
        15,
        32,
        10,
        9,
        44,
        6
    ])
)