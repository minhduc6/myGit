// //1,3,5,7,8,9

// let number = [1,2,7,4];
// //1
// function checkASC(x)
// {
//      for(let i = 0 ; i < (x.length - 1);i++)
//      {
//            if(x[i] > x[i+1])
//            {
//                return false;
//            }
//      }
//      return true;
// }

// console.log(checkASC(number));
// // 2

// function kiemTraTangChan(x) {
//     for(let i = 0 ; i < (x.length - 1);i++)
//      {
//            if(x[i] > x[i+1] || x[i] % 2 != 0 )
//            {
//                return false;
//            }
//      }
//      return true;
// }
// //3
// function findMax(x) {
//     let max = x[0];
//     for (let index = 0; index < x.length; index++) {
//         if(x[index] > max)
//         {
//               max = x[index];
//         }
//     }
//     return max 
// }

// console.log(findMax(number));

// // 7
// function cau7(x)
// {
//     let arrayResult =[];
//     for (let index = 0; index < x.length; index++) {
//         if(x[index] %2 == 0)
//         {
//             arrayResult.push(0);
//         }
//         else
//         {
//             arrayResult.push(1);
//         }
//     }
//     return arrayResult;
// }
// let number1 = [4,2,5,6,2,7];
// console.log(cau7(number1));

// // 8

// function repeatX10(x)
// {
//     let result = "";
//     for(let i = 0 ; i < 10 ;i++)
//     {
//         result += x;
//     }
//     return result;
// }
// //console.log(repeatX10('a'));

// function repeatX10next(x)
// {
//     let a = "";
//     for(let i = 0 ; i < 10 ;i++)
//     {
//         a += x + '-';
//     }
//     let result = a.substring(0,a.length-1);
//     return result;
// }
// console.log(repeatX10next('a'));
//Bai 1
function checkElementExit(arr,x) {
   for(let i = 0 ; i < arr.length ; i++)
   {
       if(arr[i] == x)
       {
            return true;
       }
   }
   return false;
}
console.log(checkElementExit([1,2,7,4],6))
//Bai 2
let number = [1,2,7,4,6]
function max2Number (arr){
       arr.sort();
       return arr[arr.length - 2];
}
console.log(max2Number([1,2,7,4]))
//Bai 3 
function  findMaxLengthElement(arrString){
    let lengthArr = [];
    for(let i = 0 ; i < arrString.length ; i++)
    {
        lengthArr.push(arrString[i].length)
    }
    let max = Math.max(...lengthArr)
    let result = arrString.filter(x => x.length == max)
    return result;
}
console.log(findMaxLengthElement(["aba", "aa", "ad", "c", "vcd"]))
//Bai 4
function capitalizeString(string) {
    let result ="";
    let arrString = string.split(" ")
    for(let i = 0 ; i < arrString.length ; i++)
    {
       let x = arrString[i].toLowerCase();
       x =  x.charAt(0).toUpperCase() + x.slice(1);
       result += x + " ";
    }
    return result;
}
console.log(capitalizeString('chÀo MừnG đẾn với techMaster'))
//Bai 5
function  reverseString(x) {
    return x.split("").reverse().join("");
}
console.log(reverseString("Hello"))

//Bai 6 
function checkSymmetricString(x) {
   let temp = x.toLowerCase();
   for(let i = 0 ; i < temp.length/2 ; i++)
   {
        if (temp[i] != temp[temp.length - i - 1]) {
                 return false;
        }
        return true;
   }
}
console.log(checkSymmetricString("Race car"))


