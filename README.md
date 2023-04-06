# Rudimentary LotR TCG Database
*A barebones filterable visual database for Decipher's LOTR TCG*

## Features
* **Basic Filtering:** "Searching" functions by applying filters to the database. The top navigation menu contains checkbox filters for each cardset and dropdown filters for culture and cardtype. Pressing "filter" displays the results.
	- *Block Filtering:* Clicking the name of a category of sets ("block") toggles the entire category. If a set in the category is already checked, clicking the name of the category will first check all sets in the category. If all sets are checked, clicking the name will uncheck all of them.
	- *Subcategories:* Certain cardtypes (Ally, Artifact, Possession, and Site) enable subcategory filtering when selected.
	- *Filtering Validation:* If a culture and/or cardtype filter is selected without any sets checked, the filter button will check all sets and display the results.
	- *Result Count:* The number of cards meeting the selected criteria is displayed beneath the "Filter" button when pressed.
	- *Clearing Results:* Use the "reset" button or click the header title at the top of the page to clear results and toggles.

* **Errata:** Cards with errata default to updated wording. This includes 2021 balancing errata issued by the Player's Council. Mouseover these cards to show the original printing.

## Functionality
The card database is contained within the html of the page. Images are pulled from https://wiki.lotrtcgpc.net. 

Code for the database was generated with an Excel formula to concatenate the div and image containers with the appropriate attributes from a table generated from https://lotrtcgwiki.com/. An example is provided below for reference, where column C contains the card's number, column E contains the card's type (the formula removes subtypes), and column F contains the card's culture.

	=concatenate("<div class=",char(34),"card set-4 culture-",lower(F2)," type-",lower(if(isnumber(search(" •",E2))=true,left(E2,find(" •",E2,1)-1),E2)),char(34),"><img loading=",char(34),"lazy",char(34)," src=",char(34),"https://wiki.lotrtcgpc.net/images/LOTR-EN04S",text(C2,"000"),".0_card.jpg",char(34),"></div>")

## See Also
You might also like my WARS TCG Database: https://github.com/matthalm/warsdb.

## Thanks
Basic design approach and card styling css adapted from https://github.com/patrickgalbraith/zombicide-card-database.
