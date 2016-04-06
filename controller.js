function addFunction(event) {
	var name = document.getElementById('nameText').value;
	document.getElementById('nameText').value = "";
	addName(name);

	showNameList();
}

function showNameList() {
	var ul = document.getElementById('list'),
		newItem, newText;

	// remove old list
	ul.innerHTML = "";

	// show new list
	for (var i = 0; i < nameList.length; i++) {
		newItem = document.createElement("li");
		newText = document.createTextNode(nameList[i].name);

		newItem.appendChild(newText);
		ul.appendChild(newItem);
	}
}

window.onload = function() {
	showNameList();
}
