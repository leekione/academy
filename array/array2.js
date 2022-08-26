{
const arr = [1,2,3];

const multi = arr.map(x => x*3);
console.log(multi);

// const arr2 = [];
// for(let arr2 of arr)
// arr.forEach(ele=>arr2.push(ele*3));
// console.log(arr2);

const arr3 = [];
arr3.push(1,2,3);
console.log(arr3);

const result = [];
arr.forEach(ele=>result.push(ele*3));
console.log(result);
}
{   //Array.prototype.map()
    //콜백함수의 반환값들로 구성된 새로운 배열을 반환
    const arr = [1,2,3];
    const result = arr.map(ele=>ele*3);
    console.log(result);
}
{
    const arr = [1,2,3];
    arr.map(ele=>ele*3).forEach(ele=>console.log(ele));
    //결과 3,6,9 출력하기
}

{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const result = [];
    arr.forEach(ele=>{
        if(ele %2 == 0) result.push(ele)
    });
    console.log(result);
    //결과 [2,4,6,8,10]
}
