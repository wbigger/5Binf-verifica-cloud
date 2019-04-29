var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(datajson) {
		console.log(datajson);
	
		datajson.commissionList.forEach(element => {
			let card=` <tr>
			<td>${element.name}</td>
			<td>${element.surname}</td>
			<td>${element.materia}</td>
		  </tr>`;
			$("#esame").append(card);
		});

		$('#dataTable').DataTable();
	},

	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
