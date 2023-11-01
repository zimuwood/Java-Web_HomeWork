var frame = '';

function AC(){
    total = 0;
    frame = '';
    con = document.getElementById("framebox");
    document.getElementById("framebox").innerHTML = '0';
}

function del(){
    if(frame == '' || frame == '0' || frame.length - 1 == 0){
        frame = '';
        document.getElementById("framebox").innerHTML = '0';
    }
    else{
        frame = frame.substring(0, frame.length - 1);
        document.getElementById("framebox").innerHTML = frame;
    }
}

function add(){
    frame += '+';
    document.getElementById("framebox").innerHTML = frame;
}

function min(){
    frame += '-';
    document.getElementById("framebox").innerHTML = frame;
}

function multiply(){
    frame += '*';
    document.getElementById("framebox").innerHTML = frame;
}

function divide(){
    frame += '/';
    document.getElementById("framebox").innerHTML = frame;
}

function nums(n){
    frame += n;
    document.getElementById("framebox").innerHTML = frame;
}

function dot(){
    frame += '.';
    document.getElementById("framebox").innerHTML = frame;
}

function ans(){
    while(frame.indexOf('*') != -1 || frame.indexOf('/') != -1){
        let start, end, pos;
        if(frame.indexOf('*') == -1){
            pos = frame.indexOf('/');
        }
        else if(frame.indexOf('/') == -1){
            pos = frame.indexOf('*');
        }
        else{
            let p1 = frame.indexOf('*');
            let p2 = frame.indexOf('/');
            pos = p1 < p2 ? p1 : p2;
        }
        let tmpp = pos;
        while(pos > 0 && frame[pos] != '+' && frame[pos] != '-')
            pos--;
        start = pos;
        start = start == 0 ? -1 : start;
        pos = tmpp;
        while(pos < frame.length - 1 && frame[pos] != '+' && frame[pos] != '-')
            pos++;
        end = pos;
        end = end == frame.length - 1 ? end + 1 : end;
        let frame2 = frame.substring(start + 1, end);
        frame2 = cal2(frame2);
        frame = frame.substring(0, start + 1) + frame2 + frame.substring(end);
    }
    frame = cal1(frame);
    document.getElementById("framebox").innerHTML = frame;
}

function square(){
    frame += '²';
    document.getElementById("framebox").innerHTML = frame;
}

function sqrt(){
    frame += '√';
    document.getElementById("framebox").innerHTML = frame;
}

function cal1(frame1){
    let total1 = 0;
    let tmp = 0;
    let mark = 0;
    let flag = -1;
    let sqrtSymbol = false;
    for(var i = 0; i < frame1.length; i++){
        let m = frame1.charAt(i);
        if(m == '+' || m == '-' || m == '²' || m == '√' || m == '.'){
            if(m == '²')
                tmp *= tmp;
            else if(m == '√')
                sqrtSymbol = true;
            else if(m == '.'){
                mark = 0.1;
            }
            else{
                if(flag == -1){
                    if(sqrtSymbol){
                        sqrtSymbol = false;
                        tmp = Math.sqrt(tmp);
                    }
                    total1 = tmp;
                }
                else{
                    switch(flag){
                        case '+':{
                            total1 += tmp;
                            break;
                        }
                        case '-':{
                            total1 -= tmp;
                            break;
                        }
                    }
                }
                flag = m;
                tmp = 0;
                mark = 0;
            }
        }
        else{
            if(mark == 0)
                tmp = tmp * 10 + (m - '0');
            else{
                tmp += mark*(m - '0');
                mark *= 0.1;
            }
        }
    }
    switch(flag){
        case '+':{
            total1 += tmp;
            break;
        }
        case '-':{
            total1 -= tmp;
            break;
        }
        case -1:{
            if(sqrtSymbol){
                sqrtSymbol = false;
                tmp = Math.sqrt(tmp);
            }
            total1 = tmp;
            break;
        }
    }
    return total1;
}
function cal2(frame2){
    let total2 = 0;
    let tmp = 0;
    let mark = 0;
    let flag = -1;
    let sqrtSymbol = false;
    for(var i = 0; i < frame2.length; i++){
        let m = frame2.charAt(i);
        if(m == '*' || m == '/' || m == '²' || m == '√' || m == '.'){
            if(m == '²')
                tmp *= tmp;
            else if(m == '√')
                sqrtSymbol = true;
            else if(m == '.'){
                mark = 0.1;
            }
            else{
                if(flag == -1){
                    if(sqrtSymbol){
                        sqrtSymbol = false;
                        tmp = Math.sqrt(tmp);
                    }
                    total2 = tmp;
                }
                else{
                    switch(flag){
                        case '*':{
                            total2 *= tmp;
                            break;
                        }
                        case '/':{
                            total2 /= tmp;
                            break;
                        }
                    }
                }
                flag = m;
                tmp = 0;
                mark = 0;
            }
        }
        else{
            if(mark == 0)
                tmp = tmp * 10 + (m - '0');
            else{
                tmp += mark*(m - '0');
                mark *= 0.1;
            }
        }
    }
    switch(flag){
        case '*':{
            total2 *= tmp;
            break;
        }
        case '/':{
            total2 /= tmp;
            break;
        }
        case -1:{
            if(sqrtSymbol){
                sqrtSymbol = false;
                tmp = Math.sqrt(tmp);
            }
            total2 = tmp;
            break;
        }
    }
    return total2;
}