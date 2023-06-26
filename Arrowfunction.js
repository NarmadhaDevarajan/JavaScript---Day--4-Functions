//1.ODD NUMBER

// let a=[1,2,5,6,9,4,3]
// let odd=(...a)=>{
//     for(let i=0;i<a.length;i++)
//     {
//         if(a[i]%2!==0)
//         console.log("odd numbers"+a[i]);
//     }
// }
// console.log(odd(1,2,5,6,9,4,3));
// -----------------------------------------------------------------------------
//2.SUM

// let sum=(...a)=>{
//     let sum1=0;
//     for(let i=0;i<a.length;i++){
//         sum1=sum1+i;}
//         console.log(sum1);
    
// })(1,2,3,4,5)
//------------------------------------------------------------------------------
// 3.PRIME NUMBER

// let isPrime=(...a)=>{
//     for (let i of a) {
//         if(a[i]%2!==0)
//         console.log((a[i]));
        
//     } 
//  })(2,5,4,8,7,9);
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
//5.PALINDROME

//  let palindrome=(str)=>{
// let str1=str[0].split("");
// let str2=str1.reverse();
// let str3=str2.join("");
// if(str3==str){
//     console.log(`${str}:"palindrome"`);}
// else{
// console.log(`${str}:"not palindrome"`);}
//  }
//  palindrome("madam");
 //------------------------------------------------------------------------------
 // 7.TITLE CAPS

//let titleCaps=(...str)=>{
//     let str1=str[0].split(" ");
// let str2=str1[0].split("");
// let str3=str1[1].split("");

// for(let i=0;i<str2.length;i++)
// {
// str2[0]=str2[0].toUpperCase();
// console.log(str2[i]);
// }
// for(let j=0;j<str3.length;j++)
// {
// str3[0]=str3[0].toUpperCase();
// console.log(str3[j]);
// }
// }
// titleCaps("hellow world");