function swapcase (str) {
var res = '';
for (var i = 0; i < str.length; i++) {
if(str[i] === str[i].toUpperCase()){res += str[i].toLowerCase()};
if(str[i] === str[i].toLowerCase()){res += str[i].toUpperCase()};
}
return res;
}
console.log(swapcase('AaBbc'));

