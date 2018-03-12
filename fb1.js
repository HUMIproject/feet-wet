document.body.style.border = "16px solid red";

var x = document.getElementsByClassName("UFILikeLink");

var i;
for (i = 0; i < x.length; i++) {

    var parent = x[i].parentNode;
    var span   = document.createElement ("span");
    var text   = document.createTextNode("HUMI");
    span.appendChild(text);
    parent.insertBefore(span, x[i]);
}

