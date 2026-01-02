# Rudimentary LotR TCG Database
*A barebones filterable visual database for Decipher's LOTR TCG*

## Features
* **Basic Filtering:** "Searching" functions by applying filters to the database. The top navigation menu contains checkbox filters for each cardset and dropdown filters for culture and cardtype. Pressing "filter" displays the results.
	- *Block Filtering:* Clicking the name of a category of sets ("block") toggles the entire category. If a set in the category is already checked, clicking the name of the category will first check all sets in the category. If all sets are checked, clicking the name will uncheck all of them.
	- *Subcategories:* Certain cardtypes (Ally, Artifact, Possession, and Site) enable subcategory filtering when selected.
	- *Filtering Validation:* If a culture and/or cardtype filter is selected without any sets checked, the filter button will check all sets and display the results.
	- *Result Count:* The number of cards meeting the selected criteria is displayed beneath the "Filter" button when pressed.
	- *Clearing Results:* Use the "reset" button or click the header title at the top of the page to clear results and toggles.

* **Errata:** Cards with errata default to the most recent version (as of the database's last update). This includes [balancing errata issued by the Player's Council](https://wiki.lotrtcgpc.net/wiki/PC_Errata). Click on cards with errata to view all printings (filters are preserved; click "filter" again to return to the previous search). Notes are included in some cases to clarify printings.
	- Decipher Errata
	- [X-List Errata (2021)](https://wiki.lotrtcgpc.net/wiki/PC_Errata#X-List_Errata) (42 cards)
	- [2021 Yuletide Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2021_Yuletide_Errata) (28 cards)
	- [2022 Summer Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2022_Summer_Errata) (5 cards)
	- [2022 Yuletide Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2022_Yuletide_Errata) (68 cards)
	- [2023 World Championship Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2023_World_Championship_Errata) (14 cards)
	- [2023 Yuletide Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2023_Yuletide_Errata) (37 cards)
	- [2024 World Championship Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2024_World_Championship_Errata) (8 cards)
	- [2024 Yuletide + V2 Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2024_Yuletide_+_V2_Errata) (63 cards)
	- [2025 Spring Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2025_Spring_Errata) (11 cards)
	- TODO: [2025 World Championship Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2025_World_Championship_Errata) (6 cards)
	- TODO: [2025 Yuletide + V3 Errata](https://wiki.lotrtcgpc.net/wiki/PC_Errata#2025_Yuletide_Errata_+_V3_Errata) (38 cards)

## Functionality
The card database is contained within the html of the page. Images are pulled from https://wiki.lotrtcgpc.net. 

Code for the database was generated with an Excel formula to concatenate the div and image containers with the appropriate attributes from a table generated from https://lotrtcgwiki.com/. An example is provided below for reference, where column C contains the card's number, column E contains the card's type (the formula removes subtypes), and column F contains the card's culture.

	=concatenate("<div class=",char(34),"card set-4 culture-",lower(F2)," type-",lower(if(isnumber(search(" •",E2))=true,left(E2,find(" •",E2,1)-1),E2)),char(34),"><img loading=",char(34),"lazy",char(34)," src=",char(34),"https://wiki.lotrtcgpc.net/images/LOTR-EN04S",text(C2,"000"),".0_card.jpg",char(34),"></div>")

## See Also
You might also like my WARS TCG Database: https://github.com/matthalm/warsdb.

## Thanks
Basic design approach and card styling css adapted from https://github.com/patrickgalbraith/zombicide-card-database.
