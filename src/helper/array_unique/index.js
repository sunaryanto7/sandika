
function array_unique(arr, params) {
    var temp = arr.map((data) => {
        return data[params]
    })
    var tempUnique = temp.filter((data, index) => {
        return temp.indexOf(data) >= index
    })
    return tempUnique;
}

export default array_unique;