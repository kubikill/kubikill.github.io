var canSwitch = true; // Used to prevent user from switching slides before animation is over
var slider = simpleslider.getSlider({
    container: document.querySelector("#slider .container"),
    children: document.querySelectorAll("#slider picture"),
    delay: 10,
    init: 100,
    end: -100,
    duration: 1,
    onChange: slideChange,
    onChangeEnd: slideChangeEnd
});

function slideChange() {
    canSwitch = false;
    document.querySelector("#slider div[data-picture].active").classList.remove("fade");
    setTimeout(function () {
        document.querySelector("#slider div[data-picture].active").classList.remove("active");
    }, 300)
};

function slideChangeEnd() {
    canSwitch = true;
    document.querySelector(`#slider div[data-picture="${slider.currentIndex()}"]`).classList.add("active", "fade");
}
document.querySelector("#slider .previous").onclick = function () {
    if (!canSwitch) {
        return false;
    }
    slider.reverse();
    slider.next();
    slider.reverse();
}
document.querySelector("#slider .next").onclick = function () {
    if (!canSwitch) {
        return false;
    }
    slider.next();
}
document.getElementById("mobilenavbtn").onclick = function () {
    document.body.style.overflow = "hidden";
    document.getElementById("mobilenav").classList.add("active", "fade");
    window.onresize = function () {
        if (document.body.clientWidth > 576) {
            document.body.style.overflow = "initial";
            document.getElementById("mobilenav").classList.remove("active", "fade");
            window.onresize = null;
        }
    }
}
document.getElementById("mobilenavclosebtn").onclick = function () {
    document.body.style.overflow = "initial";
    document.getElementById("mobilenav").classList.remove("fade");
    window.onresize = null;
    setTimeout(function () {
        document.getElementById("mobilenav").classList.remove("active");
    }, 300);
}