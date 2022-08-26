{
    //1) Array.prototype.forEach()
    //콜백함수내에서 배열을 순회하면서 요소하나에 대한 수행처리
    //반환값 undefined
    let fruits = ['사과', '바나나', '딸기'];

    const findedIdx = fruits.indexOf('바나나');
    console.log(findedIdx);
    const deletedElement = fruits.splice(findedIdx,1);
    console.log(deletedElement[0])
    fruits.forEach( ele => console.log(ele));
}

{   //스프레드 문법 [...배열]

    let fruits = ['사과', '바나나', '딸기'];
    let fruits2 = ['수박', '참외'];

    //배열 복사
    let fruits3 = fruits;
    let fruits4 = [...fruits];

    //배열 결합
    let fruits5 = [...fruits, ...fruits2, '오렌지'];
    console.log(fruits5);
}


  