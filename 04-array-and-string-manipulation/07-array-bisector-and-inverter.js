const numbers = [1,2,3,4,5,6,7,8,9,10]

function secondPartInverter(array){
    const middleIndex = Math.floor(array.length / 2);
    const firstPart = array.slice(0, middleIndex)
    const secondPart = array.slice(middleIndex).reverse()
    const result = [...firstPart, ...secondPart]

    return result
}
console.log(secondPartInverter(numbers));
