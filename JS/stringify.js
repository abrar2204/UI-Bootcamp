const obj = {
    number: 1,
    string: "Hello There",
    bool: true,
    obj:{
        number: 1,
        string: "Hello There",
        bool: true,
    }
}

const stringify = (obj)=>{
    let result = '';
    let noOfKeysLeft = Object.keys(obj).length;

    if(typeof obj !== 'object'){
        return null;
    }

    if(noOfKeysLeft === 0){
        return '{}';
    }

    result += "{";

    for(let key in obj){
        result += `"${key}":`;

        if(typeof obj[key] === 'object'){
            result += stringify(obj[key]);
        }
        else if(typeof obj[key] === 'string'){
            result += `"${obj[key]}"`
        }else{
            result += obj[key]
        }

        noOfKeysLeft--;
        result += noOfKeysLeft === 0 ? "": ",";
    }

    result += "}";

    return result;
}

console.log(stringify(obj))