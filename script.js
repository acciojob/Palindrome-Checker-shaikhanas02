// complete the given function

function palindrome(str){
  var n=str.length;
  for(let i=0;i<n/2;i++){
    if(str.charAt(i)!=str.charAt(n-i-1) || (str.charAt(i)-'a')-(str.charAt(n-i-1)-'a')!=26 || (str.charAt(i)-'a')-(str.charAt(n-i-1)-'a')!=-26){
      return false;
    }
  }
  return true;
}
module.exports = palindrome