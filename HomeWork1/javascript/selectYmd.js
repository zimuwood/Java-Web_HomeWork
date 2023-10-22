// 循环输出年月日函数
function initSelect(obj, start, end) {
    for (var i = start; i <= end; i++) {
        // 在obj对象下添加条目，文本为i，值为i
        obj.options.add(new Option(i, i))
    }
}

// 选中年、月输出天数的函数
function selectYmd() {
    // 用getElementById()方法，返回指定id的元素
    // 返回年的
    var yy = document.getElementById("years");
    // 返回月的
    var mm = document.getElementById("months");
    // 返回日的
    var dd = document.getElementById("dates");
    // 将月的value转换成数字类型,便于比较
    var m = parseInt(mm.value);
    // 声明最后天数，用于接收判断结果
    var dayEnd;
    // 判断并输出天数
    if (m == 4 || m == 6 || m == 9 || m == 11) {
        // 4月、6月、9月、11月是30天
        dayEnd = 30;
    } else if (m == 2) {
        // 不闰年2月28天
        dayEnd = 28;
        // 闰年的话2月29天
        // 将年份转换成数字类型，便于判断
        y = parseInt(yy.value);
        // 能被4整除，但不能被100整除 或者 能被400整除 就是闰年
        if((y%4==0 && y%100!=0) || y%400==0){
            dayEnd = 29;
        }
    } else {
        // 其他月份31天
        dayEnd = 31;
    }
    // 删除已经输出的31天
    dd.options.length = 0;
    //重新输出判断后的天数，dayEnd为最后一天
    initSelect(dd, 1, dayEnd)
}

// 函数Ymd()：增加下拉年、月、日的条目
function ymd() {
    // 获取时间Date对象，用于处理日期和时间
    var d = new Date();
    // 获取当前年份
    var nowYear = d.getFullYear();
    // 用getElementById()方法，返回指定id的元素
    // 返回年的
    var yy = document.getElementById("years");
    // 返回月的
    var mm = document.getElementById("months");
    // 返回日的
    var dd = document.getElementById("dates");

    // 调用initSelect()函数
    // 输出年下拉框的年份,从1999-今年
    initSelect(yy, 1999, nowYear);
    // 输出月下拉框的月份，从1-12月
    initSelect(mm, 1, 12);
    // 输出日下拉框的天数
    initSelect(dd, 1, 31);
    // //调用选中年、月输出天数的函数
    selectYmd();
}