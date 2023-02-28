function toggle(toggle,type) {
    let checkBox = document.getElementById(toggle);
    let cards = document.getElementsByClassName(type);
    if (checkBox.checked == true){
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "inline-block"
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none"
        }
    }
}

function displayResults() {

//  FIRST WE TURN ON THE APPROPRIATE SETS

    toggle('toggle-Fellowship','set-1');
    toggle('toggle-Mines','set-2');
    toggle('toggle-Realms','set-3');
    toggle('toggle-Towers','set-4');
    toggle('toggle-Battle','set-5');
    toggle('toggle-Ents','set-6');
    toggle('toggle-King','set-7');
    toggle('toggle-Siege','set-8');
    toggle('toggle-Reflections','set-9');
    toggle('toggle-Doom','set-10');
    toggle('toggle-Shadows','set-11');
    toggle('toggle-Rider','set-12');
    toggle('toggle-Bloodlines','set-13');
    toggle('toggle-Expanded','set-14');
    toggle('toggle-Hunters','set-15');
    toggle('toggle-Wraith','set-16');
    toggle('toggle-Rise','set-17');
    toggle('toggle-Treachery','set-18');
    toggle('toggle-End','set-19');
    toggle('toggle-Past','set-v1');
    
//  THEN CULTURES

    toggle('toggle-dwarf','culture-dwarf');
    toggle('toggle-elf','culture-elf');
    toggle('toggle-gandalf','culture-gandalf');
    toggle('toggle-smeagol','culture-smeagol');
    toggle('toggle-gondor','culture-gondor');
    toggle('toggle-rohan','culture-rohan');
    toggle('toggle-shire','culture-shire');
    toggle('toggle-dunland','culture-dunland');
    toggle('toggle-gollum','culture-gollum');
    toggle('toggle-isengard','culture-isengard');
    toggle('toggle-moria','culture-moria');
    toggle('toggle-raider','culture-raider');
    toggle('toggle-ringwraith','culture-ringwraith');
    toggle('toggle-sauron','culture-sauron');
    toggle('toggle-men','culture-men');
    toggle('toggle-orc','culture-orc');
    toggle('toggle-urukhai','culture-urukhai');
    toggle('toggle-wraith','culture-wraith');

  

//  THEN CARDTYPES

    toggle('toggle-ally','type-ally');
    toggle('toggle-artifact','type-artifact');
    toggle('toggle-companion','type-companion');
    toggle('toggle-condition','type-condition');
    toggle('toggle-event','type-event');
    toggle('toggle-follower','type-follower');
    toggle('toggle-minion','type-minion');
    toggle('toggle-possession','type-possession');
    toggle('toggle-ring','type-ring');
    toggle('toggle-site','type-site');

 

}