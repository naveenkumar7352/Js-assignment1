console.log("Working");

// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"




let newset= new Set();
const remove_duplicate=(str)=>{
    for(let i=0;i<str.length;i++){
        newset.add(str[i]);
    }
    let str2="";
    for(let val of newset.values()){
        str2+=val;
    }
    console.log(str2);
}
remove_duplicate("aabbcdfeeds");


// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"



let newMap = new Map();
const char_count=(str)=>{
    let a=str.split("");
    for(let i=0;i<a.length;i++){
    let count=1;
    for(let j=i+1;j<a.length;j++){
        if(a[i]===a[j]){
            count++;
            a.splice(j,1);
            j--;
        }
    }
    newMap.set(a[i],count);
}
for(let [key,value] of newMap.entries()){
    console.log(key+"="+value);
}
}
char_count("abcadeecfb");