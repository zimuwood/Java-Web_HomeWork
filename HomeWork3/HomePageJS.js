function Stu1(){
    var text = document.getElementById('Stu1');
    let stu1 = {
        姓名:"小红",
        年龄:20,
        爱好:"跳舞",
    }
    text.innerHTML="工厂方式:<br>let stu1 = {姓名:\"小红\",年龄:20,爱好:\"跳舞\",}";
}

function Stu2(){
    var text = document.getElementById('Stu2');
    function stu(name, age, hobbies){
        this.name = name;
            this.age = age;
            this.hobbies = hobbies;
    }

    let stu2 = new stu("小明", 18, "唱歌");
    text.innerHTML="构造函数方式:<br>function stu(name, age, hobbies){this.name = name;this.age = age;this.hobbies = hobbies;}<br>let stu2 = new stu(\"小明\", 18, \"唱歌\");";
}

function Stu3(){
    var text = document.getElementById('Stu3');
    function stu(){}
    stu.prototype.name="小强";
    stu.prototype.age=20;
    stu.prototype.hobbies="打篮球";
    let stu3 = new stu();
    text.innerHTML="原型方式:<br>function stu(){}<br>stu.prototype.name=\"小强\";<br>stu.prototype.age=20;<br>stu.prototype.hobbies=\"打篮球\";<br>let stu3 = new stu();";
}

function findAElm(){
    let input = document.getElementById('arrA').value;
    let arr = input.split("");

    let ans;
    let ansnum = 0;
    let elems = new Array();
    let counts = new Array();


    arr.forEach(function(element) {
        let flag = false;
        for(let i = 0; i < elems.length; i++){
            if(elems[i] == element){
                counts[i]++;
                flag = true;
                if(counts[i] > ansnum)
                    ans = elems[i];
            }
        }
        if(!flag){
            counts[elems.length] = 1;
            elems[elems.length] = element;
        }
    });

    let text = document.getElementById("Num");
    text.innerHTML=ans;
}

function getAll(){
    let nameAll = document.getElementById("check-all");
    let list = document.getElementsByName("name");
    for(let i = 0; i < list.length; i++){
        list[i].checked = nameAll.checked;
    }
}

function checkAll(){
    let nameAll = document.getElementById("check-all");
    let list = document.getElementsByName("name");
    let flag = true;
    for(let i = 0; i < list.length; i++){
        if(!list[i].checked)
            flag = false;
    }
    if(flag)
        nameAll.checked = true;
    else
        nameAll.checked = false;
}