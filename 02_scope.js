var message = "Name: Vishal Kumar";
console.log("global: message = " + message);

var a = function () {
    var message = "Roll Number: 2006169";
    console.log("a: message = " + message);

    b();
}

  function b () {
      var message = "Vishal"
  console.log("b: message = " + message);
  }
a();
