// -----兼容chrome、firefox、safari等及IE9以上版本----- //

// 定义变量并初始化
var getString = ""; //输入框输入值
var first = ""; //第一个运算数
var second = ""; //第二个运算数
var operater = ""; //操作符
var operaterCount = 0; //操作符个数
var outcome = 0; //运算结果

//清除输入框
function clearValue() {
    document.getElementById("outcome").value = "";
    getString = "";
    outcome = "";
    first = "";
    second = "";
    operater = "";
    operaterCount = 0;
}

// 从输入框获取输入值，通过父元素代理方式绑定click事件监听函数
var mydiv = document.getElementById("mydiv");
mydiv.addEventListener("click", function(event) {
    var srcObj = event.srcElement ? event.srcElement : event.target;
    var get = srcObj.value;
    if (get == "0" || get == "1" || get == "2" || get == "3" || get == "4" || get == "5" || get == "6" || get == "7" || get == "8" || get == "9" || get == ".") {
        getString += get;
        document.getElementById("outcome").value = getString;
    }
});

// 加法运算
var plus = document.getElementById("plus");
plus.addEventListener("click", function(event) {
    // 在进行加法运算之前，如果前面已输入过运算符，则将运算结果作为加法运算的第一个加数
    if (operaterCount == 1) {
        first = eval(first + operater + Number(getString)); //计算第一个加数
        document.getElementById("outcome").value = first;
        getString = "";
        operater = "+";
    } 
    // 前面未输入过运算符，则直接从输入框获取第一个加数
    else {
        first = Number(getString);
        getString = "";
        operater = "+";
        operaterCount = 1;
    }
});

// 减法运算
var minus = document.getElementById("minus");
minus.addEventListener("click", function(event) {
    // 在进行减法运算之前，如果前面已输入过运算符，则将运算结果作为减法运算的被减数
    if (operaterCount == 1) {
        first = eval(first + operater + Number(getString)); //计算被减数
        document.getElementById("outcome").value = first;
        getString = "";
        operater = "-";
    } 
    // 前面未输入过运算符，则直接从输入框获取被减数
    else {
        first = Number(getString);
        getString = "";
        operater = "-";
        operaterCount = 1;
    }
});

// 乘法运算
var times = document.getElementById("times");
times.addEventListener("click", function(event) {
    // 在进行乘法运算之前，如果前面已输入过运算符，则将运算结果作为乘法运算的被乘数
    if (operaterCount == 1) {
        first = eval(first + operater + Number(getString)); //计算被乘数
        document.getElementById("outcome").value = first;
        getString = "";
        operater = "*";
    } 
    // 前面未输入过运算符，则直接从输入框获取被乘数
    else {
        first = Number(getString);
        getString = "";
        operater = "*";
        operaterCount = 1;
    }
});

// 除法运算
var divide = document.getElementById("divide");
divide.addEventListener("click", function(event) {
    // 在进行除法运算之前，如果前面已输入过运算符，则将运算结果作为除法运算的被除数
    if (operaterCount == 1) {
        first = eval(first + operater + Number(getString)); //计算被除数
        document.getElementById("outcome").value = first;
        getString = "";
        operater = "/";
    } 
    // 前面未输入过运算符，则直接从输入框获取被除数
    else {
        first = Number(getString);
        getString = "";
        operater = "/";
        operaterCount = 1;
    }
});

// 百分号运算
var percentage = document.getElementById("percentage");
percentage.addEventListener("click", function(event) {
    getString = Number(getString) / 100;
    document.getElementById("outcome").value = getString;

});

// 平方根运算
var sqrt = document.getElementById("sqrt");
sqrt.addEventListener("click", function(event) {
    getString = Math.sqrt(Number(getString));
    document.getElementById("outcome").value = getString;

});

// 平方运算
var square = document.getElementById("square");
square.addEventListener("click", function(event) {
    getString = Math.pow(Number(getString),2);
    document.getElementById("outcome").value = getString;

});

// sin正弦运算
var sin = document.getElementById("sin");
sin.addEventListener("click", function(event) {
    getString = Math.sin(Number(getString));
    document.getElementById("outcome").value = getString;

});

// cos余弦运算
var cos = document.getElementById("cos");
cos.addEventListener("click", function(event) {
    getString = Math.cos(Number(getString));
    document.getElementById("outcome").value = getString;

});

// del键：输入错误时，删除最后一位
var del = document.getElementById("del");
del.addEventListener("click", function(event) {
    getString = getString.substr(0,getString.length-1);
    document.getElementById("outcome").value = getString;

});

// 获取圆周率π
var pi = document.getElementById("pi");
pi.addEventListener("click", function(event) {
    getString = 3.1415926535898;
    document.getElementById("outcome").value = getString;

});

// 获取一个数的相反数
var negative = document.getElementById("negative");
negative.addEventListener("click", function(event) {
    getString = 0 - Number(getString);
    document.getElementById("outcome").value = getString;

});

// 按下等号时，获取第二个运算数second，结合前面获取的第一个运算数first及操作符operater进行运算。
var equal = document.getElementById("equal");
equal.addEventListener("click", function(event) {
    second = Number(getString); //获取第二个参数second
    switch (operater) {
        case "+":
            outcome = first + second;
            break;
        case "-":
            outcome = first - second;
            break;
        case "*":
            outcome = first * second;
            break;
        case "/":
            outcome = first / second;
            break;
        default:
            outcome = second;
    }
    document.getElementById("outcome").value = outcome;
    getString = outcome.toString(); //将结果储存在getString中，在下一次运算中作为第一个运算数使用
    first = ""; //清空第一个运算数
    second = ""; //清空第二个运算数
    operater = ""; //清空运算符
});
