const arr = [1,2,3];

const result= arr.reduce((acc,ele,idx,arr)=>{
            console.log(acc,ele);
            return acc + ele;
        },0);
        console.log(result);