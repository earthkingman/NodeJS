//자바스크립트에서 변수선언은 해당 컨텍스트 최상단으로 끌어올려짐


// let a = 1;
// function test(){
//     console.log(a);
//     let a = 2;
// }
// test();


let foo = 1;
if(true){
    console.log(foo);
    let foo = 2;
}