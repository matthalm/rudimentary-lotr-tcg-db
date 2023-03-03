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
        && document.getElementById('toggle-Expanded').checked == true 
        && document.getElementById('toggle-Wraith').checked == true 
        && document.getElementById('toggle-End').checked == true ) {
        document.getElementById('toggle-Reflections').checked = false;
        document.getElementById('toggle-Expanded').checked = false;
        document.getElementById('toggle-Wraith').checked = false;
        document.getElementById('toggle-End').checked = false;
    } else {
        document.getElementById('toggle-Reflections').checked = true;
        document.getElementById('toggle-Expanded').checked = true;
        document.getElementById('toggle-Wraith').checked = true;
        document.getElementById('toggle-End').checked = true;
    }
}

function format_towersStandard() {
    format_fellowship();
    format_towers();
}

function format_movieBlock() {
    format_fellowship();
    format_towers();
    format_king();
}

function format_warStandard() {
    format_towers();
    format_king();
    format_war();
}

function format_finalStandard() {
    format_king();
    format_war();
    format_hunters();
}

function format_open() {
    format_fellowship();
    format_towers();
    format_king();
    format_war();
    format_hunters();
    format_other();
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

    var setList = [];

    if (document.getElementById("toggle-Fellowship").checked == true) {setList.push(".set-1"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Mines").checked == true) {setList.push(".set-2"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Realms").checked == true) {setList.push(".set-3"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Towers").checked == true) {setList.push(".set-4"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Battle").checked == true) {setList.push(".set-5"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Ents").checked == true) {setList.push(".set-6"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-King").checked == true) {setList.push(".set-7"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Siege").checked == true) {setList.push(".set-8"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Reflections").checked == true) {setList.push(".set-9"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Doom").checked == true) {setList.push(".set-10"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Shadows").checked == true) {setList.push(".set-11"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Rider").checked == true) {setList.push(".set-12"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Bloodlines").checked == true) {setList.push(".set-13"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Expanded").checked == true) {setList.push(".set-14"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Hunters").checked == true) {setList.push(".set-15"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Wraith").checked == true) {setList.push(".set-16"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Rise").checked == true) {setList.push(".set-17"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Treachery").checked == true) {setList.push(".set-18"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-End").checked == true) {setList.push(".set-19"+selectedCulture+selectedType);}
    if (document.getElementById("toggle-Past").checked == true) {setList.push(".set-v1"+selectedCulture+selectedType);}

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
