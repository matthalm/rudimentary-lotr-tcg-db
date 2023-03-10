function resetCards() {
    let cards = document.querySelectorAll(".card, .lcard")
    for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none"
    }
}

function format_fellowship() {
    if ( document.getElementById('toggle-Fellowship').checked == true 
        && document.getElementById('toggle-Mines').checked == true 
        && document.getElementById('toggle-Realms').checked == true 
        && document.getElementById('toggle-Past').checked == true ) {
        document.getElementById('toggle-Fellowship').checked = false;
        document.getElementById('toggle-Mines').checked = false;
        document.getElementById('toggle-Realms').checked = false;
        document.getElementById('toggle-Past').checked = false;
    } else {
        document.getElementById('toggle-Fellowship').checked = true;
        document.getElementById('toggle-Mines').checked = true;
        document.getElementById('toggle-Realms').checked = true;
        document.getElementById('toggle-Past').checked = true;
    }
}

function format_towers() {
    if ( document.getElementById('toggle-Towers').checked == true 
        && document.getElementById('toggle-Battle').checked == true 
        && document.getElementById('toggle-Ents').checked == true ) {
        document.getElementById('toggle-Towers').checked = false;
        document.getElementById('toggle-Battle').checked = false;
        document.getElementById('toggle-Ents').checked = false;
    } else {
        document.getElementById('toggle-Towers').checked = true;
        document.getElementById('toggle-Battle').checked = true;
        document.getElementById('toggle-Ents').checked = true;
    }
}

function format_king() {
    if ( document.getElementById('toggle-King').checked == true 
        && document.getElementById('toggle-Siege').checked == true 
        && document.getElementById('toggle-Doom').checked == true ) {
        document.getElementById('toggle-King').checked = false;
        document.getElementById('toggle-Siege').checked = false;
        document.getElementById('toggle-Doom').checked = false;
    } else {
        document.getElementById('toggle-King').checked = true;
        document.getElementById('toggle-Siege').checked = true;
        document.getElementById('toggle-Doom').checked = true;
    }
}

function format_war() {
    if ( document.getElementById('toggle-Shadows').checked == true 
        && document.getElementById('toggle-Rider').checked == true 
        && document.getElementById('toggle-Bloodlines').checked == true ) {
        document.getElementById('toggle-Shadows').checked = false;
        document.getElementById('toggle-Rider').checked = false;
        document.getElementById('toggle-Bloodlines').checked = false;
    } else {
        document.getElementById('toggle-Shadows').checked = true;
        document.getElementById('toggle-Rider').checked = true;
        document.getElementById('toggle-Bloodlines').checked = true;
    }
}

function format_hunters() {
    if ( document.getElementById('toggle-Hunters').checked == true 
        && document.getElementById('toggle-Rise').checked == true 
        && document.getElementById('toggle-Treachery').checked == true ) {
        document.getElementById('toggle-Hunters').checked = false;
        document.getElementById('toggle-Rise').checked = false;
        document.getElementById('toggle-Treachery').checked = false;
    } else {
        document.getElementById('toggle-Hunters').checked = true;
        document.getElementById('toggle-Rise').checked = true;
        document.getElementById('toggle-Treachery').checked = true;
    }
}

function format_other() {
    if ( document.getElementById('toggle-Reflections').checked == true 
        && document.getElementById('toggle-Weta').checked == true 
        && document.getElementById('toggle-Expanded').checked == true 
        && document.getElementById('toggle-Wraith').checked == true 
        && document.getElementById('toggle-End').checked == true ) {
        document.getElementById('toggle-Reflections').checked = false;
        document.getElementById('toggle-Weta').checked = false;
        document.getElementById('toggle-Expanded').checked = false;
        document.getElementById('toggle-Wraith').checked = false;
        document.getElementById('toggle-End').checked = false;
    } else {
        document.getElementById('toggle-Reflections').checked = true;
        document.getElementById('toggle-Weta').checked = true;
        document.getElementById('toggle-Expanded').checked = true;
        document.getElementById('toggle-Wraith').checked = true;
        document.getElementById('toggle-End').checked = true;
    }
}

function format_open() {
    format_fellowship();
    format_towers();
    format_king();
    format_war();
    format_hunters();
    format_other();
}

function hideSubfilters() {
    document.getElementById("subselect-ally").style.display = "none";
    document.getElementById("subselect-artifact").style.display = "none";
    document.getElementById("subselect-possession").style.display = "none";
    document.getElementById("subselect-site").style.display = "none";
}

function subselect() {
    document.getElementById("subselect-ally").selectedIndex = 0;
    document.getElementById("subselect-artifact").selectedIndex = 0;
    document.getElementById("subselect-possession").selectedIndex = 0;
    document.getElementById("subselect-site").selectedIndex = 0;
    switch (document.getElementById("select-type").value) {
    case ".type-ally":
        hideSubfilters();
        document.getElementById("subselect-ally").style.display = "inline-block";
        break;
    case ".type-artifact":
        hideSubfilters();
        document.getElementById("subselect-artifact").style.display = "inline-block";
        break;
    case ".type-possession":
        hideSubfilters();
        document.getElementById("subselect-possession").style.display = "inline-block";
        break
    case ".type-site":
        hideSubfilters();
        document.getElementById("subselect-site").style.display = "inline-block";
        break
    default:
        hideSubfilters();
    }
}

function filter() {

    resetCards();

    if(document.getElementById("toggle-Fellowship").checked == false 
        && document.getElementById("toggle-Mines").checked == false 
        && document.getElementById("toggle-Realms").checked == false 
        && document.getElementById("toggle-Towers").checked == false 
        && document.getElementById("toggle-Battle").checked == false 
        && document.getElementById("toggle-Ents").checked == false 
        && document.getElementById("toggle-King").checked == false 
        && document.getElementById("toggle-Siege").checked == false 
        && document.getElementById("toggle-Reflections").checked == false 
        && document.getElementById("toggle-Doom").checked == false 
        && document.getElementById("toggle-Weta").checked == false 
        && document.getElementById("toggle-Shadows").checked == false 
        && document.getElementById("toggle-Rider").checked == false 
        && document.getElementById("toggle-Bloodlines").checked == false 
        && document.getElementById("toggle-Expanded").checked == false 
        && document.getElementById("toggle-Hunters").checked == false 
        && document.getElementById("toggle-Wraith").checked == false 
        && document.getElementById("toggle-Rise").checked == false 
        && document.getElementById("toggle-Treachery").checked == false 
        && document.getElementById("toggle-End").checked == false 
        && document.getElementById("toggle-Past").checked == false ) {
        format_open();
    }

    let selectedCulture = document.getElementById("select-culture").value;
    let selectedType = document.getElementById("select-type").value;
    let selectedSubTypes = document.getElementById("subselect-ally").value + document.getElementById("subselect-artifact").value + document.getElementById("subselect-possession").value + document.getElementById("subselect-site").value;
    let selections = selectedCulture + selectedType + selectedSubTypes;

    var setList = [];

    if (document.getElementById("toggle-Fellowship").checked == true) {setList.push(".set-1"+selections);}
    if (document.getElementById("toggle-Mines").checked == true) {setList.push(".set-2"+selections);}
    if (document.getElementById("toggle-Realms").checked == true) {setList.push(".set-3"+selections);}
    if (document.getElementById("toggle-Towers").checked == true) {setList.push(".set-4"+selections);}
    if (document.getElementById("toggle-Battle").checked == true) {setList.push(".set-5"+selections);}
    if (document.getElementById("toggle-Ents").checked == true) {setList.push(".set-6"+selections);}
    if (document.getElementById("toggle-King").checked == true) {setList.push(".set-7"+selections);}
    if (document.getElementById("toggle-Siege").checked == true) {setList.push(".set-8"+selections);}
    if (document.getElementById("toggle-Reflections").checked == true) {setList.push(".set-9"+selections);}
    if (document.getElementById("toggle-Doom").checked == true) {setList.push(".set-10"+selections);}
    if (document.getElementById("toggle-Weta").checked == true) {setList.push(".set-0"+selections);}
    if (document.getElementById("toggle-Shadows").checked == true) {setList.push(".set-11"+selections);}
    if (document.getElementById("toggle-Rider").checked == true) {setList.push(".set-12"+selections);}
    if (document.getElementById("toggle-Bloodlines").checked == true) {setList.push(".set-13"+selections);}
    if (document.getElementById("toggle-Expanded").checked == true) {setList.push(".set-14"+selections);}
    if (document.getElementById("toggle-Hunters").checked == true) {setList.push(".set-15"+selections);}
    if (document.getElementById("toggle-Wraith").checked == true) {setList.push(".set-16"+selections);}
    if (document.getElementById("toggle-Rise").checked == true) {setList.push(".set-17"+selections);}
    if (document.getElementById("toggle-Treachery").checked == true) {setList.push(".set-18"+selections);}
    if (document.getElementById("toggle-End").checked == true) {setList.push(".set-19"+selections);}
    if (document.getElementById("toggle-Past").checked == true) {setList.push(".set-v1"+selections);}

    let checkedSets = setList.join(', ');
    let cards = document.querySelectorAll(checkedSets);

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
    }

    if ( cards.length == 1 ) {
        document.getElementById("results").innerHTML = cards.length + " result";
    } else {
        document.getElementById("results").innerHTML = cards.length + " results";
    }
}
