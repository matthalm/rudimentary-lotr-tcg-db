function toggle(toggle,type) {
    var checkBox = document.getElementById(toggle);
    var cards = document.getElementsByClassName(type);
    if (checkBox.checked == true){
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = "inline-block"
        }
    } else {
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = "none"
        }
    }
}