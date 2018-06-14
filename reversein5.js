var str = "azeezabrarhellow";

 array = str.match(/.{1,5}/g).reverse().join(" ");
 
for( i=array.length-1; i>=0;i--)
{
 console.log(array[i]);
};


