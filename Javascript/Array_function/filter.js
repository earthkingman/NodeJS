let numbers = [1,2,3,4,5,6,7,8,9];
let result = numbers.filter((number) => {
    if (number > 5)
        return number;
})
console.log(result);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter(word => {
    if (word.length > 6)
        return word;
})
console.log(result);
