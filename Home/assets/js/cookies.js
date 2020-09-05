function setCookie(cname, cvalue, exsecs) {
    var d = new Date();
    d.setTime(d.getTime() + (exsecs * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

var cookie = getCookie('shown');
if (!cookie) {
    if (document.getElementById("wallstreet-modal")) {
        // alert("Popup will be shown this time")
        showPopup();
    }
} else {
    if (document.getElementById("wallstreet-modal")) {
        // alert("you have seen popup")
    }
}

function showPopup() {
    setCookie('shown', 'true',0);
    setTimeout(function () {
        if (document.getElementById("wallstreet-modal")) {
            $('#wallstreet-modal').modal('show');
        }
    }, 3000)
}
$(document).ready(function () {

    setTimeout(function () {

        if (!Cookies.get('modalShown')) {

            $("#wallstreet-modal").modal('show');
            Cookies.set('modalShown', true);

        } else {
            alert('Your modal won\'t show again as it\'s shown before.');
        }

    }, 1000);
});