$(document).ready(function() {
    $("#Form2").on('submit', function(event) {
        event.preventDefault()

var username=$("#name2").val()
var password =$("#pass2").val()
console.log(username);
console.log(password);
let users = JSON.parse(localStorage.getItem("users")) 
console.log(Array.isArray(users.users.users));

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  each(users.users.users, function(element, index) {
    if (username.length===0|| password.length===0) {
        $("#msgErreur").text("please fill in both fields")
        
    } else if (element.username === username && element.pass=== password) {
     
        $("#msgErreur").text("")
        alert("Login successful!")   
    }
    else {
        $("#name2").css({"border-color":"red"})
        $("#pass2").css({"border-color":"red"})

    }
    $("#name2").val("")
    $("#pass2").val("")
});

})
})
