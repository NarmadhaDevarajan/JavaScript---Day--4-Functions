//1.ODD NUMBER

// //let a=[1,2,5,6,9,4,3]
// function odd(...a){
//     for(let i=0;i<a.length;i++)
//     {
//         if(a[i]%2!==0)
//         console.log("odd numbers"+a[i]);
//     }
// }
// console.log(odd(1,2,5,6,9,4,3));
// -----------------------------------------------------------------------------
//2.SUM

// (function sum(...a){
//     let sum1=0;
//     for(let i=0;i<a.length;i++){
//         sum1=sum1+i;}
//         console.log(sum1);
    
// })(1,2,3,4,5)
//------------------------------------------------------------------------------
// 3.PRIME NUMBER

// (function isPrime(...a){
//     for (let i of a) {
//         if(a[i]%2!==0)
//         console.log((a[i]));
        
//     } 
//  })(2,5,4,8,7,9);
//-------------------------------------------------------------------------------
// 4.DUPLICATES

//let arr=["apple","mango","orange","apple","mango","orange"];
//console.log([...new Set(arr)]);

//-------------------------------------------------------------------------------
//5.PALINDROME

//  function palindrome(str){
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
 //6.MEDIAN

//  let arr1=[1,3,5,7];
//  let arr2=[2,4,6,8];
// function median(arr1,arr2){
//     let arr=[...arr1,...arr2];
//     arr.sort((a,b)=>a-b)
//     let mIndex=Math.floor(arr.length/2);
//     return median = arr.length%2 === 1 ? arr[mIndex] : (arr[mIndex-1]+arr[mIndex])/2
// }
// console.log(median(arr1,arr2));
//---------------------------------------------------------------------------------
// 7.TITLE CAPS

// function titleCaps(...str){
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