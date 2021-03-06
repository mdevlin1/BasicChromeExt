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