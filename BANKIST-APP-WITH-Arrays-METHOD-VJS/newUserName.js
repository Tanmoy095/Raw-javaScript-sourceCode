//const user = "Aunmoy Dey Tanmoy" //ADT

const createUserName = function(str){
    const userName = str.toLowerCase().split(" ")
    .map(name=>
        name[0]
    ).join("")
    return userName;
    
};
console.log(createUserName("Aunmoy Dey Tanmoy"));

