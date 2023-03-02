# Rudimentary LotR TCG Database
A barebones filterable visual database for Decipher's LOTR TCG

"Searching" functions by toggling a number of sets (click a block heading to toggle all sets in the block) and/or filtering by culture and cardtype. Pressing "filter" displays the results. If a culture and/or cardtype filter is selected without any sets toggled, the filter button will toggle all sets and display the results. Use the "reset" button or click the header title to clear results and toggles.

The card database is contained within the html of the page. Images are pulled from https://wiki.lotrtcgpc.net. 

Code for the database was generated with an Excel formula to concatenate the div and image containers with the appropriate attributes from a table generated from https://lotrtcgwiki.com/. An example is provided below for reference, where column C contains the card's number, column E contains the card's type (the formula removes subtypes), and column F contains the card's culture.

	=concatenate("<div class=",char(34),"card set-4 culture-",lower(F2)," type-",lower(if(isnumber(search(" •",E2))=true,left(E2,find(" •",E2,1)-1),E2)),char(34),"><img loading=",char(34),"lazy",char(34)," src=",char(34),"https://wiki.lotrtcgpc.net/images/LOTR-EN04S",text(C2,"000"),".0_card.jpg",char(34),"></div>")

Basic design approach and card styling css adapted from https://github.com/patrickgalbraith/zombicide-card-database.

The json file in the repository is not used for anything. Maybe someday....
