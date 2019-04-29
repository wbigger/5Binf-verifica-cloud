var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
	
		dataJson.commissionList.forEach(element => {
			let card= `<tr>
			<td>${element.name}</td>
			<td>${element.surname}</td>
			<td>${element.materia}</td>
		  </tr>`;
		//   PROF: se usi "name" e "surname" per coerenza dovresti usare "subject" o qualcosa di simile
		  $("#esame").append(card);
		});

		$('#dataTable').DataTable();
		
	},

	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
