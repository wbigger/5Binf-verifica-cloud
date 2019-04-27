var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		let lista=dataJson.commissione;
		lista.forEach(element => {let materia=`
		<tr>
			  <td>${element.nomeprof}</td>
			  <td>${element.cognomeprof}</td>
			  <td>${element.materia}</td>
			</tr>
			
		`});
		$("#materia").append(materia); // PROF: append deve stare dentro il ciclo
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
