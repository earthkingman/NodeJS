// map 
let numbers = [1,2,3,4,5,6,7,8,9,9,6,4,2,3,4]

let result = numbers.map(number => {
    return number + 1;
})
console.log(result);


result = numbers.map(number => {
    if (number % 2 == 0) {
        return '짝수';
    }
    else
        return '홀수';
})
console.log(result);

let list = [0,0,0,0,0,0,0,0,0,0,0];
numbers.map(number =>{
    list[number]++;
})

console.log(list);
// 숫자갯수새기
