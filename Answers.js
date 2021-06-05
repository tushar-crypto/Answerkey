console.log("Answer1");
// Question1:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

// Question 7:
console.log("Answer 7");
let url = "https://my-json-server.typicode.com/typicode/demo/posts";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onload = () => {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
  } else {
    console.log("some error occurred");
  }
};
xhr.send();

// Question 2:
console.log("Answer 2");
ConsecutiveOnes = function (arr, n) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
      if (count > result) {
        result = count;
      }
    }
  }
  return result;
};
let array = [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1];
let size = array.length;
console.log("maximum consecutive 1's are :" + ConsecutiveOnes(array, size));

// Question :4
function validate() {
    var valid = true;
    var checkbox = document.getElementById('check');
    var text = document.getElementById('namefield').value;
    if( ! checkbox.checked|| text.length)
        valid = confirm("Checkbox and text are empty. \n Continue?");
    return valid;
}

// Question :3
console.log("Answer 3");
const a = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
let counts = {};
for (let i = 0; i < a.length; i++) {
  if (counts[a[i]]) {
    counts[a[i]] += 1;
  } else {
    counts[a[i]] = 1;
  }
}
for (let key in counts) {
  if (counts[key] >= 2) {
    console.log(key + " repeated : " + counts[key] + " times");
  }
}
console.log(counts);

// Question:8
var obj = {
  
    "id" : 4,
    "id": 10, 
    "id" : 5, 
    "id" : 6, 
   }
   
var sortableArray = [];
for (var key in obj) {
    sortableArray.push([key, obj[key]]);
}
sortableArray.sort(function(a, b) {
    return a[1] - b[1];
});
var objSorted = {}
sortableArray.forEach(function(item){
    objSorted[item[0]]=item[1]
})