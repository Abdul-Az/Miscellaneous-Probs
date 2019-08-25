let arr=[1,2,3,5,4,8,7,10,11,15,16,17,14].sort((a,b) => a - b)
let i=0
let temp = 0
n = arr.length;
let j,k=0
console.log('Sorted array', arr)

while(i < n)
{
     j=i+1;
     k=i+2;
     if(k >= n)   //base condition
         break
    temp = arr[j]
    arr[j]=arr[k]
    arr[k]=temp
    i=k+1;
} 

console.log('Swapped array', arr)