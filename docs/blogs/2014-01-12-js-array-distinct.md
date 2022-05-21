---
title: js 数组去重
---
```javascript
<script type="text/javascript">
function distinct7(arr) {
  var self = arr;
  var _a = arr.concat().sort();
  _a.sort(function(a, b) {
    if (a == b) {
      var n = self.indexOf(a);
      self.splice(n, 1);
    }
  });
  return self;
};

function distinct6(arr){
  var ret = [];
  var hash = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key = typeof(item) + item;
    if (hash[key] !== 1) {
      ret.push(item);
      hash[key] = 1;
    };
  };
  return ret;
}

function distinct5(arr){
  var e,temp=[],o= {};
  for (var i=0;(e=arr[i])!==undefined;i++){
    if (!o[e]){
      temp.push(e);o[e]=true;
    }
  }
  return temp.sort(function(a,b){return a-b});;
}

function distinct4(arr){
  var temp=[],b;
  for(var i=0;i<arr.length;i++){
    b=true;
    for(var j=0;j<temp.length;j++){
      if(arr[i]===temp[j]){
        b=false;break;
      };
    }
    if(b){
      temp.push(arr[i])
    }
  }
  return temp.sort(function(a,b){return a-b});
}

function distinct3(arr) {
  var temp = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        j=++i
      }
    }
  temp.push(arr[i]);}
  return temp.sort(function(a,b){return a-b});
}

function distinct2(arr) {
  var temp = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        j=false;
        break;
      }
    }
    if(j){
      temp.push(arr[i]);
    }
  }
  return temp.sort(function(a,b){return a-b});
}

function distinct1(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr.sort(function(a,b){return a-b});
}
</script>
```
