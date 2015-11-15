function calGrade() {
    var score = document.getElementById("score").value;
    var grade;
    if (score >= 0 && score <= 100) {
        switch (true) {
            case score >= 90 && score <= 100:
                grade = 1;
                break;
            case score >= 80 && score <= 89:
                grade = 2;
                break;
            case score >= 70 && score <= 79:
                grade = 3;
                break;
            case score >= 60 && score <= 69:
                grade = 4;
                break;
            case score >= 50 && score <= 59:
                grade = 5;
                break;
            case score >= 40 && score <= 49:
                grade = 6;
                break;
            case score >= 30 && score <= 39:
                grade = 7;
                break;
            case score >= 20 && score <= 29:
                grade = 8;
                break;
            case (score >= 10 && score <= 19):
                grade = 9;
                break;
            case score >= 0 && score <= 9:
                grade = 10;
                break;
        }
        document.getElementById("grade").value = grade;
        if (grade == 1) {
            document.getElementById("info").innerHTML = "你非常优秀，继续保持！";
        } else if (grade == 2) {
            document.getElementById("info").innerHTML = "成绩良好，再接再厉哟！";
        } else if (grade == 3) {
            document.getElementById("info").innerHTML = "成绩一般，还需努力！";
        } else if (grade == 4) {
            document.getElementById("info").innerHTML = "成绩刚刚及格，该加油啦！";
        } else {
            document.getElementById("info").innerHTML = "成绩不及格，需要狠狠地加油啦！";
        }
    } else {
        alert("成绩为数字，正确的成绩应该在0 ~ 100之间，请重新输入！");
    }

}