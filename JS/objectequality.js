const obj1 = {
    a:1,
    b:2,
    c:{
        d:"Hello There"
    }
}
const obj2 = {
    a:1,
    b:2,
    c:{
        d:"Hello There"
    }
}

const obj3 = {
    a:1,
    b:2,
    c:{
        d:3
    }
}
const checkIfObjectsAreSame = (obj,anotherObject)=>{
    if(Object.keys(obj).length !== Object.keys(anotherObject).length){
        return false;
    }
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            if(typeof anotherObject[key] !=='object'){
                return false;
            }
            return checkIfObjectsAreSame(obj[key],anotherObject[key]);
        } 
        if(obj[key] !== anotherObject[key]){
            return false
        }
    }
    return true;
}

console.log(checkIfObjectsAreSame(obj1,obj2))
console.log(checkIfObjectsAreSame(obj1,obj3))