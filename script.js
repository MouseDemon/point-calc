
// Grab the URL parameters
var urlParams = new URLSearchParams(window.location.search);

// Gather some of the data from the querystring
let victim = `${urlParams.get('victim')}`
let victimInfo = urlParams.getAll('victimInfo') 
let attackRevenge = urlParams.get('attack-revenge')
let size = urlParams.getAll('size') 
let chibi = urlParams.getAll('chibi') 
let lines = urlParams.get('lines') 
let color = urlParams.get('color')
let shading = urlParams.get('shading')
let background = urlParams.get('background')
let animation = urlParams.get('animation')



// Fill the page with the user's personal information
// Maybe innerHTML to get things to change on the index page?
document.getElementById('Info').textContent = `Victim: ${victim} || ${attackRevenge}`

document.getElementById('victimInfo').textContent = `${victimInfo.join(' || ')}`

// document.getElementById('sizeInfo').textContent = `Size: ${size} ${chibi.join(' || ')}`

document.getElementById('sizeInfo').textContent = `Size: ${size} ${chibi.join(' || ')}`

document.getElementById('lineInfo').textContent = `Lines: ${lines}` 
document.getElementById('colorInfo').textContent = `Color: ${color}` 
document.getElementById('shadeInfo').textContent = `Shading: ${shading}`
document.getElementById('backInfo').textContent = `Background: ${background}`







        
let totalScore = 0

function scoreCalc() {
    document.write('Hello, World!')
}


// FORM CLONE
var counter = 0;

function moreFields() {
	counter++;
	var newFields = document.getElementById('readroot').cloneNode(true);
	newFields.id = '';
	newFields.style.display = 'block';
	var newField = newFields.childNodes;
	for (var i=0;i<newField.length;i++) {
		var theName = newField[i].name
		if (theName)
			newField[i].name = theName + counter;
	}
	var insertHere = document.getElementById('writeroot');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

// window.onload = moreFields;

