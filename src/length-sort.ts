




function lengthSort (list: Array<string>): Array<string> {

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - 1; j++) {
            if (list[j].length > list[j + 1].length) {

                let temp = list[j + 1]

                list[j + 1] = list[j]
                list[j]     = temp

            }
        }
    }

    return list
}

// console.log(
//     lengthSort([
//         'Nilolai',
//         'vagan',
//         'petr'

//     ])
// )