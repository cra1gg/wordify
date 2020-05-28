var endpoint = "https://jsonbox.io/box_fa80c4e65b7e3fd8a2b0"

function getrandom(){    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);    return random_string()}

function geturl(){     var url = document.getElementById(“urlinput”).value;     var protocol_ok = url.startsWith(“http://”) || url.startsWith(“https://”) || url.startsWith(“ftp://”);     if(!protocol_ok){         newurl = “http://”+url;         return newurl;     }else{         return url;     }

function genhash(){    if (window.location.hash == “”){        window.location.hash = getrandom();    }}

function send_request(url) {    this.url = url;    $.ajax({        ‘url’: endpoint + “/” + window.location.hash.substr(1),        ‘type’: ‘POST’,        ‘data’: JSON.stringify(this.url),        ‘dataType’: ‘json’,        ‘contentType’: ‘application/json; charset=utf-8’    })}


function shorturl(){    var longurl = geturl();    genhash();    send_request(longurl);}

