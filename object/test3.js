{
    //빈객체 생성
    const obj = {};

    //프로퍼티 동적추가
    obj.name = '홍길동';
    obj.age = 30;
    obj.study = function() {
        console.log('공부하다');
    }

    obj.study();
}

{
    let name = '홍길동';
    const age = 30;

    const person = {
        name:'홍길순',
        age:20
    }

    //변수이름을 프로퍼티키, 변수값을 프로퍼티값으로 객체리터럴생성
    const obj = {name,age};
    console.log(obj);

    const obj2 = {...person, blood:'A'};
    console.log(obj2);

    const blood = 'A';
    name = '홍길남'
    const obj3 = {...person, name};
    console.log(obj3);
}