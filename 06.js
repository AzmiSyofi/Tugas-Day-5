/*
Loop with Range

Buatlah script untuk mencetak dengan rentang angka tertentu.

Contoh: 

Input pertama: 4
Input kedua: 8
Output di browser: 4, 5, 6, 7, 8
*/

function range(start,end){
    var len = end - start + 1;
    var a = new Array(len);
    
    for(let i = 0; i < len; i++) a[i] = start + i;
    return a;
}

console.log(range(4,8));