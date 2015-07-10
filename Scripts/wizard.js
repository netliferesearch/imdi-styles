// Global variables
var guide_openSection;
var guide_summary = new Array();

// LOADING

guide_openSection = document.getElementsByClassName('js-guide-step-first')[0];

// Hides all sections in the guide and display the first
var guide_allSections = document.getElementsByClassName('js-guide-step');
var n = guide_allSections.length;
for (var i = 0; i < n; i++) {
	guide_allSections[i].style.display = 'none';
}


guide_openSection.style.display = ''; 
var list = document.getElementById('summary-section-list').innerHTML = '';
document.getElementById('summary-section').style.display = 'none';




// Next
function guideNext(){
	var selectedChoice = guide_openSection.querySelectorAll("input:checked"); 
	if(!selectedChoice.length){
		
		// Show error when a choice is not given
		document.getElementById('guide-error').style.display = '';

	} else {

		document.getElementById('guide-error').style.display = 'none';

		// Get choice data
		var id = guide_openSection.id;	
		var question = guide_openSection.querySelectorAll("legend")[0].textContent;
		var answer = selectedChoice[0].parentNode.textContent;
		var nextSection = selectedChoice[0].dataset.nextsection;

		guide_summary.push({
			id: id,
			question: question,
			answer: answer
			});

		console.log(id + "Spørsmål:" + question + " Svar:" + answer + nextSection);

		// Hide and open section
		guide_openSection.style.display = 'none'; 
		guide_openSection = document.getElementById(nextSection);
		if(guide_openSection){
			guide_openSection.style.display = '';
		} else {
			alert("Oops.. Finner ikke neste seksjon. Eivinds feil :)");		
		}
		if(guide_openSection.dataset.nextbutton == "hide") {
			document.getElementById('guide-button-next').style.display = 'none';
		}
		
		// Update history summary
		guideSummaryRedraw();

	}
}

// Update summary
function guideSummaryRedraw(){
	// Clear summary
	var list = document.getElementById('summary-section-list');
	list.innerHTML = '';

	var n = guide_summary.length;
	if(n > 0) document.getElementById('summary-section').style.display = '';
	var li, strong, a;
	for (var i = 0; i < n; i++) {

		li = document.createElement("li");
		
		div = document.createElement("div");
		div.setAttribute('class', 'info animations__fade-in-down');
				
		h3 = document.createElement("h3");
		h3.setAttribute('class', 'info__title');
		h3.textContent = guide_summary[i].question;
		div.appendChild(h3);
		div.appendChild(document.createTextNode(guide_summary[i].answer));

		a = document.createElement("a");		
		a.setAttribute('href', "#" + guide_summary[i].id);
		a.setAttribute('class', 'button button--small button--secondary button--inline');				
		a.addEventListener('click', guideEdit, false);
		if(i == 0) a.textContent = "Starte på nytt";
		else a.textContent = "Endre";
		div.appendChild(a);
		
		li.appendChild(div);		

		list.appendChild(li);
	}	
}




// Summary Change
function guideEdit() {
 alert("Funker ikke enda desverre.. Mas på Joakim");
 return false;
}
// Skjul openSection
// Open chosen section with selection
// Kutt bort tilsvarende linjer i oppsummeringen
// Oppdater utlisting


