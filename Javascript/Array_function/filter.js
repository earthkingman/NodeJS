let numbers = [1,2,3,4,5,6,7,8,9];
let result = numbers.filter((number) => {
    if (number > 5)
        return number;
})
// console.log(result);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter(word => {
    if (word.length > 6)
        return word;
})
// console.log(result);

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

function isNumber(obj) {
    if (obj !== undefined && typeof(obj) === 'number' && !isNaN(obj))
        return obj;
}

let count = 0;

result = arr.filter(item =>{
    if (isNumber(item.id) && item.id !== 0)
    {
        return item.id;
    }
    else
        count++;
})

console.log(result);
