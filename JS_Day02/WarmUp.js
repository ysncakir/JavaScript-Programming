function isPalindrome(str){
    var reversed="";
    if(typeof str =="string"){ 
        for(var i = str.length-1; i>=0; i--){
            reversed+=str.charAt(i);
        }
        if (str == reversed){
            return true; 
        
    } else{
        return false;
    }
}
}

console.log(isPalindrome("levkamilel"));

console.log(isPalindrome("nun"));

function removeDuplicates(str){
    if(typeof str == "string"){
        var nonDuplicates ="";
        for(var i =0; i<str.length; i++){
            if(!nonDuplicates.includes(str.charAt(i))){
                    nonDuplicates+= str.charAt(i); 
            }
        }

    } else{
        console.log("Invalid entry");
    }
    return nonDuplicates; 

}

console.log(removeDuplicates("aaaabbddcddees"));

console.log(removeDuplicates(100));

