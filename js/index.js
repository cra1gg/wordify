let pushJSON = (address, longurl, shorturl) => {
    let request = new XMLHttpRequest();
    request.open('POST', address);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    let data = {
        "l": longurl,
        "s": shorturl
    };
    request.send(JSON.stringify(data));
};

let cinp = () => {
    document.getElementById("erbox").innerHTML = "";
    let cival = document.getElementById("custominput").value;

    try {
        let res = JSON.parse(fetchJSON(endpoint + '/?q=s:' + cival))[0]["l"];
        let data = res;
        if (data != null) {
            return false;
    
        } else if (data == null) {
            return true;
    
        }
    }
    catch(err){
        return true;
    }


   


};


async function getrandom() {
  let response = await fetch('https://api.wordify.xyz/word')
  let data = await response.json()
  return data[0]
}

let genhash = () => {
    if (document.getElementById("custominput").value == "") {
        getrandom().then(data => {
            document.getElementById('shortenedURL').value = "https://wordify.xyz#" + data
            if (check_is_unique(data)){
                send_request();
            }
            else {
                genhash();
            }
        })
    } else {
        document.getElementById('shortenedURL').value = "https://wordify.xyz#" + document.getElementById("custominput").value
        send_request();
    }
};

let check_is_unique = (word) => {
    let url = word;
    let res = JSON.parse(fetchJSON(endpoint + '/?q=s:' + url))[0];
    let data = res;

    if (data != null){
        return false;
    }
    else {
        return true;
    }


};

let copyer = (containerid) => {
    let elt = document.getElementById(containerid);
    if (document.selection) { // IE
        if (elt.nodeName.toLowerCase() === "input") {
            document.getElementById(containerid).select();
            document.execCommand("copy");
        } else {
            let range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select();
            document.execCommand("copy");
        }

    } else if (window.getSelection) {
        if (elt.nodeName.toLowerCase() === "input") {
            document.getElementById(containerid).select();
            document.execCommand("copy");
        } else {
            let range_ = document.createRange();
            range_.selectNode(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range_);
            document.execCommand("copy");
        }
    }
};

let send_request = () => {
    let longurl = document.getElementById("urlinput").value;
    let shorturl = document.getElementById("shortenedURL").value.split('#')[1];
    let address = endpoint + "/";
    pushJSON(address, longurl, shorturl);
    document.getElementById('sucess').innerHTML = "Shortened URL has been copied to your clipboard.";
    copyer("shortenedURL");
};

let shorturl = () => {
    let longurl = document.getElementById("urlinput").value;
    let re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    let cre = /^([a-zA-Z0-9 _-]+)$/;
    let protocol_ok = re.test(longurl);
    if (!protocol_ok) {
        document.getElementById("erbox").style.color = "red";
        document.getElementById("erbox").innerHTML = "❌ Invalid URL";
    } else {
        document.getElementById("erbox").innerHTML = "";
        if (document.getElementById("custominput").value == "") {
            genhash();

        } 
        else {
            if (cre.test(document.getElementById("custominput").value)) {
                if (cinp()) {
                    document.getElementById("erbox").style.color = "cyan";
                    document.getElementById("erbox").innerHTML = " Custom Address Available ✔️";
                    genhash();
                } else {
                    document.getElementById("erbox").style.color = "red";
                    document.getElementById("erbox").innerHTML = "❌ Custom Address Not Available";
                    document.getElementById("custominput").placeholder = document.getElementById("custominput").value;
                    document.getElementById("custominput").value = "";
                }
            } else {
                document.getElementById("erbox").style.color = "red";
                document.getElementById("erbox").innerHTML = "Invalid Custom URL! Use only Alphanumerics and underscore!";
                document.getElementById("custominput").placeholder = document.getElementById("custominput").value;
                document.getElementById("custominput").value = "";

            }
        }


    }
};

let urlcheck = () => {
    if (cinp()) {
        document.getElementById("erbox").style.color = "cyan";
        document.getElementById("erbox").innerHTML = " Custom Address Available ✔️";
    } else {
        document.getElementById("erbox").style.color = "red";
        document.getElementById("erbox").innerHTML = "❌ Custom Address Not Available";
    }
};
document.getElementById("sbtn").addEventListener("click", shorturl);
document.getElementById("custominput").addEventListener("input", urlcheck)
