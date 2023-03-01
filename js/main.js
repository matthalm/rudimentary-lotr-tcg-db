function resetCards() {
    let cards = document.querySelectorAll(".card, .lcard")
    for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none"
    }
}

function format_fellowship() {
    document.getElementById('toggle-Fellowship').checked = true;
    document.getElementById('toggle-Mines').checked = true;
    document.getElementById('toggle-Realms').checked = true;
    document.getElementById('toggle-Past').checked = true;
}

function format_towers() {
    document.getElementById('toggle-Towers').checked = true;
    document.getElementById('toggle-Battle').checked = true;
    document.getElementById('toggle-Ents').checked = true;
}

function format_king() {
    document.getElementById('toggle-King').checked = true;
    document.getElementById('toggle-Siege').checked = true;
    document.getElementById('toggle-Doom').checked = true;
}

function format_war() {
    document.getElementById('toggle-Shadows').checked = true;
    document.getElementById('toggle-Rider').checked = true;
    document.getElementById('toggle-Bloodlines').checked = true;
}

function format_hunters() {
    document.getElementById('toggle-Hunters').checked = true;
    document.getElementById('toggle-Rise').checked = true;
    document.getElementById('toggle-Treachery').checked = true;
}

function format_other() {
    document.getElementById('toggle-Reflections').checked = true;
    document.getElementById('toggle-Expanded').checked = true;
    document.getElementById('toggle-Wraith').checked = true;
    document.getElementById('toggle-End').checked = true;
}

function format_towersStandard() {
    document.getElementById('toggle-Fellowship').checked = true;
    document.getElementById('toggle-Mines').checked = true;
    document.getElementById('toggle-Realms').checked = true;
    format_towers();
}

function format_movieBlock() {
    format_towersStandard();
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
    format_movieBlock();
    format_war();
    format_hunters();
    format_other();
}

function filter() {

    resetCards();

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
}
