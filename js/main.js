function resetCards() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none"
    }
}

function filterSets() {

    resetCards();

    var setList = [];
 
    if (document.getElementById("toggle-Fellowship").checked == true) {setList.push(".set-1");}
    if (document.getElementById("toggle-Mines").checked == true) {setList.push(".set-2");}
    if (document.getElementById("toggle-Realms").checked == true) {setList.push(".set-3");}
    if (document.getElementById("toggle-Towers").checked == true) {setList.push(".set-4");}
    if (document.getElementById("toggle-Battle").checked == true) {setList.push(".set-5");}
    if (document.getElementById("toggle-Ents").checked == true) {setList.push(".set-6");}
    if (document.getElementById("toggle-King").checked == true) {setList.push(".set-7");}
    if (document.getElementById("toggle-Siege").checked == true) {setList.push(".set-8");}
    if (document.getElementById("toggle-Reflections").checked == true) {setList.push(".set-9");}
    if (document.getElementById("toggle-Doom").checked == true) {setList.push(".set-10");}
    if (document.getElementById("toggle-Shadows").checked == true) {setList.push(".set-11");}
    if (document.getElementById("toggle-Rider").checked == true) {setList.push(".set-12");}
    if (document.getElementById("toggle-Bloodlines").checked == true) {setList.push(".set-13");}
    if (document.getElementById("toggle-Expanded").checked == true) {setList.push(".set-14");}
    if (document.getElementById("toggle-Hunters").checked == true) {setList.push(".set-15");}
    if (document.getElementById("toggle-Wraith").checked == true) {setList.push(".set-16");}
    if (document.getElementById("toggle-Rise").checked == true) {setList.push(".set-17");}
    if (document.getElementById("toggle-Treachery").checked == true) {setList.push(".set-18");}
    if (document.getElementById("toggle-End").checked == true) {setList.push(".set-19");}
    if (document.getElementById("toggle-Past").checked == true) {setList.push(".set-v1");}

    let checkedSets = setList.join(', ');
    let cards = document.querySelectorAll(checkedSets);

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
    }
}

function filterCultures() {

    resetCards();

    var cultureList = [];

    if (document.getElementById("toggle-dwarf").checked == true) {cultureList.push(".culture-dwarf");}
    if (document.getElementById("toggle-elf").checked == true) {cultureList.push(".culture-elf");}
    if (document.getElementById("toggle-gandalf").checked == true) {cultureList.push(".culture-gandalf");}
    if (document.getElementById("toggle-smeagol").checked == true) {cultureList.push(".culture-smeagol");}
    if (document.getElementById("toggle-gondor").checked == true) {cultureList.push(".culture-gondor");}
    if (document.getElementById("toggle-rohan").checked == true) {cultureList.push(".culture-rohan");}
    if (document.getElementById("toggle-shire").checked == true) {cultureList.push(".culture-sire");}
    if (document.getElementById("toggle-dunland").checked == true) {cultureList.push(".culture-dunland");}
    if (document.getElementById("toggle-gollum").checked == true) {cultureList.push(".culture-gollum");}
    if (document.getElementById("toggle-isengard").checked == true) {cultureList.push(".culture-isengard");}
    if (document.getElementById("toggle-moria").checked == true) {cultureList.push(".culture-moria");}
    if (document.getElementById("toggle-raider").checked == true) {cultureList.push(".culture-raider");}
    if (document.getElementById("toggle-ringwraith").checked == true) {cultureList.push(".culture-ringwraith");}
    if (document.getElementById("toggle-sauron").checked == true) {cultureList.push(".culture-sauron");}
    if (document.getElementById("toggle-men").checked == true) {cultureList.push(".culture-men");}
    if (document.getElementById("toggle-orc").checked == true) {cultureList.push(".culture-orc");}
    if (document.getElementById("toggle-urukhai").checked == true) {cultureList.push(".culture-urukhai");}
    if (document.getElementById("toggle-wraith").checked == true) {cultureList.push(".culture-wraith");}

    let checkedCultures = cultureList.join(', ');
    let cards = document.querySelectorAll(checkedCultures);

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
    }
}

function filterTypes() {

    resetCards();

    var typeList = [];

    if (document.getElementById("toggle-ally").checked == true) {typeList.push(".type-ally");}
    if (document.getElementById("toggle-artifact").checked == true) {typeList.push(".type-artifact");}
    if (document.getElementById("toggle-companion").checked == true) {typeList.push(".type-companion");}
    if (document.getElementById("toggle-condition").checked == true) {typeList.push(".type-condition");}
    if (document.getElementById("toggle-event").checked == true) {typeList.push(".type-event");}
    if (document.getElementById("toggle-follower").checked == true) {typeList.push(".type-follower");}
    if (document.getElementById("toggle-minion").checked == true) {typeList.push(".type-minion");}
    if (document.getElementById("toggle-possession").checked == true) {typeList.push(".type-possession");}
    if (document.getElementById("toggle-ring").checked == true) {typeList.push(".type-ring");}
    if (document.getElementById("toggle-site").checked == true) {typeList.push(".type-site");}

    let checkedTypes = typeList.join(', ');
    let cards = document.querySelectorAll(checkedTypes);

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
    }
}

function headerClicked(headerObj) {
     $(headerObj).parent().find('.filters').slideDown(500);
}

function headerClickedUp(headerObj) {
    $(headerObj).parent().find('.filters').slideUp(500);
}
