var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
		dataJson.commissionlist.foreach(element =>  let card `<tr>
		<td>${element.name}</td>
		<td>${element.surname}</td>
		<td>${element.materia}</td>
		</tr>`
		$("#esame").append(card)
	
	});
},

	onError: function(e){
			console.log(`Ajax error: $(JSON.stringify(e)}`);
	}
}

$(document).ready(app.init)
	
	