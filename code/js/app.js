var app = {
	init: function () {
		console.log("init");
		$.getJSON("api/data.json")
			.done(app.showCards)
			.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		dataJson.tableList.forEach(element => {
			let table = `<tr>
			<td>${element.name}</td>
			<td>${element.cognome}</td>
			<td>${element.materia}</td>
		  </tr>`
			$("#table-container").append(table);
		});
		$("dataTable").DataTable();
	},
	onError: function (e) {
		console.log(`Ajax error: ${JSON.stringify(e)
			}`);
	}
}
$(document).ready(app.init);
