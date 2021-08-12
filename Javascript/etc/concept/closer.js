// function outter(){
//     function inner(){
//         var title = 'coding everybody';
//         console.log(title);
//     }
//     inner();
// }
// outter();


// function outter2(){
//     var title = 'coding everybody2';
//     function inner2(){
//         console.log(title);
//     }
//     inner2();
// }
// outter2();


// function outter3(){
//     var title = 'coding everybody';
//     return function(){
//         console.log(title);
//     }
// }

// inner3 = outter3();
// inner3();


// function factory_movie(title){
//     return {
//         get_title : function (){
//             return title;
//         },
//         set_title : function(_title){
//             title = _title;
//         }
//     }
// }

// ghost = factory_movie('Ghost in the shell');
// matrix = factory_movie('Matrix');

// console.log(ghost.get_title());
// console.log(matrix.get_title());
// ghost.set_title('공각기동대');
// console.log(ghost.get_title());

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
// for(var index in arr) {
//     console.log(arr[index]());
// }