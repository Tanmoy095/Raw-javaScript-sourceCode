const oneward=function(str){
    return str.replace(/ /g,"").toLowerCase();
}
const upperFirstword=function(str){
    const[first,...others]=str.split(" ");
    return [first.toUpperCase(),...others].join(' ');
}

//Higher Order Function
const transformer=function (str,fn) {
    console.log(`original string ${str}`);
    console.log(`Transformed string ${fn(str)}`);
    console.log(`transformed by ${fn.name}`);
    
}

transformer("javascript better than python",upperFirstword)
transformer("javascript better than python",oneward)

