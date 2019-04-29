var app = {
	init: function () {
		console.log("init");
		$.getJSON("api/data.json")
			.done(app.showCards,app.onSuccess)
			.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);

	},
	onSuccess: function (jsonData) {
		
		let list = jsonData.commList;
		list.forEach(element => {
			let html = `<tr>
			<td>${element.name}</td>
			<td>${element.surname}</td>
			<td>${element.subject}</td>
		  </tr>`;
			$("#dataTable tbody").append(html);
		});

		$('#dataTable').DataTable();
		
		let list2 = jsonData.lastUpdate;
		list2.forEach(element => {
			let html2 = `<div class="card-footer small text-muted">Updated ${element.day} at ${element.time}</div>`;
			$("#card").after(html2);
		});

	},
	onError: function (e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);


