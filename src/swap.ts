const data = [
    'Ivan',
    'Egor',
    'Igor',
    'Oleg',
    'Nikolai',
]

function swap (list: Array<any>, l: number, r: number): Array<any> | void {
    
    if (l === r) {
        throw new Error('indices are equal')
        return
    }
    if (r >= list.length) {
        throw new Error('not such index')
        return
    }
    if (l < 0) {
        throw new Error('not such index')
        return
    }
    
    let temp = list[r]

    list[r] = list[l]
    list[l] = temp

    return list
}

console.log(
    swap(data, 0, data.length - 1)
)

