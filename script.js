var arrayyyy = [];
function inp(){
  var  plusSign = document.querySelector(".form-control").value;
       arrayyyy.push(plusSign); 
    var div = document.querySelector(".alert-danger");
        div.innerHTML = arrayyyy;
}

function add() {
    var resultOne = document.querySelector(".res");
    sum = eval(arrayyyy.join('+'));
    resultOne.innerHTML = sum;
}
function divid() {
    var resultTwo = document.querySelector(".res");
    sum = eval(arrayyyy.join('+'));
    avg = sum/arrayyyy.length;
    resultTwo.innerHTML = avg;
}
function pro() {
    var resultThree = document.querySelector(".res");
    sum = eval(arrayyyy.join('+'));
    proo = sum/arrayyyy.length;
    resultThree.innerHTML = proo;
}