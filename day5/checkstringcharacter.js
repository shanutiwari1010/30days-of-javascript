let str= "shanu"
let target = "w"

const isContains = (str,u)=>{
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)===u)return true;
       
    }
    return false;
}

console.log(isContains(str,target))