// 函数：当页面加载时，如果之前设置了主题色，则恢复之前页面的主题颜色
function load() {
    var getSubject = localStorage.subject;
    if (getSubject) {
        switch (getSubject) {
            case "green":
                document.getElementById("menus_ul").setAttribute("class", "setgreen"); /*恢复导航栏主题色*/
                textColor("setgreen"); /*恢复底排链接网址字体主题色*/
                break;
            case "purple":
                document.getElementById("menus_ul").setAttribute("class", "setpurple");
                textColor("setpurple");
                break;
            case "pink":
                document.getElementById("menus_ul").setAttribute("class", "setpink");
                textColor("setpink");
                break;
            case "blue":
                document.getElementById("menus_ul").setAttribute("class", "setblue");
                textColor("setblue");
                break;
        }
    }
}

// 函数：设置底排链接网址字体的主题颜色
function textColor(setColor) {
    var selectedSites = document.getElementsByClassName("green-site"); /* a标签最开始拥有class="green-site" */
    var myLength = selectedSites.length;
    for (var i = 0; i < myLength; i++) {
        selectedSites[i].setAttribute("class", setColor + " green-site"); /* 增加a标签一个新的class：setColor */
    }
}

// 函数：设置主题颜色为绿色
function subjectGreen() {
    document.getElementById("menus_ul").setAttribute("class", "setgreen"); /*设置导航栏主题背景色为绿色*/
    textColor("setgreen"); /*设置底排链接网址字体为绿色*/
    localStorage.setItem("subject", "green"); /* 通过localstorage保存主题色为绿色 */
}

// 函数：设置主题颜色为紫色
function subjectPurple() {
    document.getElementById("menus_ul").setAttribute("class", "setpurple");
    textColor("setpurple");
    localStorage.setItem("subject", "purple");
}

// 函数：设置主题颜色为粉红色
function subjectPink() {
    document.getElementById("menus_ul").setAttribute("class", "setpink");
    textColor("setpink");
    localStorage.setItem("subject", "pink");
}

// 函数：设置主题颜色为蓝色
function subjectBlue() {
    document.getElementById("menus_ul").setAttribute("class", "setblue");
    textColor("setblue");
    localStorage.setItem("subject", "blue");
}
