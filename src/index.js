module.exports = function check(str, bracketsConfig) {
    if ((str.length)/2 != Math.floor((str.length)/2)){
        return false;
    }
    for (var i = 0; i<str.length; i++){
      for (var j = 0; j<bracketsConfig.length; j++){
        if (bracketsConfig[j][0] == str[i]){
         for (var h = 0; h<str.length;h++){
            if ((bracketsConfig[j][1] == str[h]) && (i - h == -1)){
              return true;
           }else{
             continue;
           }
         }
        }
      }
    }
}
