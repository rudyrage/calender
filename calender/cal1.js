let cal = document.getElementById('calender');

function displayMonthName(date) {
	let monthName = date.toLocaleString('default', {month: 'long'});
	return monthName;
}



function showCalender(year, month){
	let newCal = document.createElement("div");
	newCal.setAttribute("class", "calender-child");
	cal.append(newCal);
	let elem = newCal;

	month = month - 1;
	let date = new Date(year, month);

	let table = `<h1>${displayMonthName(date)}</h1><table><tr><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th></tr><tr>`;

	for (let i = 0; i < date.getDay(date); i++) {
		table += '<td></td>';
	}

	while (date.getMonth()  == month) {
		let day = date.getDay();
		table += `<td>${date.getDate()}</td>`;
		
		if (day == 0) day = 7;
		if (day % 7 == 6) 
			table += "</tr><tr>"

		date.setDate(date.getDate() + 1)
		// console.log(date.getDay())
	}


	table += "</tr></table>"


	elem.innerHTML = table;
}

let yearInput = document.getElementById('search-calender');
let searchCal = document.getElementById('get-date');
function getYearFromInput() {
	return yearInput.value;
}

function showFullMonthOfYear(year) {
	for (let month = 1; month <= 12; month++) {
		showCalender(year, month);
	}
}

let checktoRefresh = 0;
searchCal.addEventListener('click', () => {
	while (cal.firstElementChild) {
  	  cal.removeChild(cal.firstElementChild)
	}
	showFullMonthOfYear(getYearFromInput())
})
