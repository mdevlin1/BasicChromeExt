function search(num) {
    return num;
}

document.getElementById('clickme').addEventListener('click', search(num));


function addQuery() {
	var type = document.getElementById("type").submit();
	document.getElementById("holder").innerHTML = 
		`<label>${type}</label>
        <input type="text" name="field2" placeholder="Search">`
}

function addQuery() {
	var type = document.getElementById("test").submit();
	var currentDiv = document.getElementById("holder");
	var newDiv = document.createElement("div");
	var newCont = document.createTextNode("<li><label>"+type+"</label>
		  <input type='text' name='field2' placeholder='Search'>;</li>");
	newDiv.appendChild(newCont);
	document.body.insertBefore(newDiv, currentDiv);
  }