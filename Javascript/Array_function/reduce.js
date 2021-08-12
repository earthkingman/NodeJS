// 취미별 사람 구하기
let users = [
    { id: 1, name: 'Alice', hobby : 'soccer' },
    { id: 2, name: 'Bek', hobby : 'piano' }, 
    { id: 3, name: 'Chris' , hobby : 'basketball'},
    { id: 4, name: 'Tom' , hobby : 'soccer'}
]

let result = users.reduce((acc, curr) =>{
    if (acc[curr.hobby])    
        acc[curr.hobby] = acc[curr.hobby] + 1;
    else
        acc[curr.hobby] = 1;
    return acc;
},{})
console.log(result);


//홀수 짝수 갯수 새기
const oneTwoThree = [1, 2, 3];
result = oneTwoThree.reduce((acc, curr) => {
    if (curr % 2 == 0)
        acc.a++;
    else
        acc.b++;
    return acc;
},{
    a : 0,
    b : 0
})
console.log(result);