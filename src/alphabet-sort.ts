

function byAlphabet (list: Array<string>): Array<string> {

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - 1; j++) {
            if (list[j].charCodeAt(0) > list[j + 1].charCodeAt(0)) {

                let temp = list[j + 1]

                list[j + 1] = list[j]
                list[j]     = temp
            }
        }
    }

    return list
}

// console.log(
//     alphabetSort([
//         'banana',
//         'orange',
//         'apple',
//         'lemon'
//     ])
// )