//用函数实现加、减、乘、除的简易计算//

// 定义函数check。验证x、y的数据类型，如果x、y中有非数值类型，则弹框提示重新输入
function check(valueX,valueY) {
    if (isNaN(valueX) || isNaN(valueY)) {
        alert("x和y必须为数字，请重新输入！");
    }
}

// 定义函数result。当参数outcome有具体值时，将outcome值输出到结果输入框中,否则清空结果输入框
function result(outcome) {
    if ((outcome == undefined) || isNaN(outcome)) {
        document.getElementById("outcome").value = "";
    } else {
        document.getElementById("outcome").value = outcome;
    }
}

// 定义加法函数plus
function plus() {
    var valueX = document.getElementById("value-x").value;
    var valueY = document.getElementById("value-y").value;
    check(valueX,valueY);
    var outcome = (valueX - 0) + (valueY - 0);
    result(outcome);
}

// 定义减法函数minus
function minus() {
    var valueX = document.getElementById("value-x").value;
    var valueY = document.getElementById("value-y").value;
    check(valueX,valueY);
    var outcome = valueX - valueY;
    result(outcome);
}

// 定义乘法函数times
function times() {
    var valueX = document.getElementById("value-x").value;
    var valueY = document.getElementById("value-y").value;
    check(valueX,valueY);
    var outcome = valueX * valueY;
    result(outcome);
}

// 定义除法函数divide
function divide() {
    var valueX = document.getElementById("value-x").value;
    var valueY = document.getElementById("value-y").value;
    check(valueX,valueY);
    if (valueY == 0) {
        alert("除数y不能为0，请重新输入！");
    } else {
        var outcome = valueX / valueY;
    }
    result(outcome);
}

// 定义函数clearValue，清空x、y输入框和结果输出框，且光标自动聚焦到x值输入框
function clearValue() {
    document.getElementById("value-x").value = "";
    document.getElementById("value-y").value = "";
    document.getElementById("outcome").value = "";
    document.getElementById("value-x").focus();
}

// 定义shiftInput函数，当x值输入完毕后，按下enter键自动跳转到y值输入框。
function shiftInput(){
    if (event.keyCode == 13) {
        document.getElementById("value-y").focus();
    }
}

