class Mode {
    constructor(type,  url) {
        this.type = type;
        this.url = url;
    }
}

const srch = document.querySelector('#srch');
const srchurl = "https://www.google.com/search?q=";
let modeObj;

document.addEventListener('DOMContentLoaded',init);

function init() {
    modeObj = new Mode('web',srchurl);
}

function openurl(e) {

    let url = modeObj.url
    let input = srch.value.trim().replace("+", "%2B").replace("=", "%3D").replace("&", "%26").replace(" ", "+");
    url = url.concat(input);
    if (e.keyCode == 13 && input != "") {
        window.location = url;
    }
}

function search(){
    var srch = document.getElementById('srch').value;
    let input = srch.trim().replace("+", "%2B").replace("=", "%3D").replace("&", "%26").replace(" ", "+");
    let srchurl = 'https://www.google.com/search?q='
    input = srchurl+input;
    window.location = input;
}



function opendrop(id){

    if(id==='drop_menu'){
        document.getElementById('drop_account').style.display='none';
        document.getElementById('drop_setting').style.display='none';
    }
    if(id==='drop_account'){
        document.getElementById('drop_menu').style.display='none';
        document.getElementById('drop_setting').style.display='none';
    }
    if(id==='drop_setting'){
        document.getElementById('drop_menu').style.display='none';
        document.getElementById('drop_account').style.display='none';
    }

    element = document.getElementById(id);
    display = window.getComputedStyle(element).display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}

document.getElementById('container').onclick=function(){      
    document.getElementById('drop_menu').style.display='none';
    document.getElementById('drop_account').style.display='none';
    document.getElementById('drop_setting').style.display='none';
}
