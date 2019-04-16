var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson){
	console.log(dataJson);
		dataJson.cardList.forEach(element => {
			let card = `div class="card-body">
		<div class="table-responsive">
		  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
			<thead>
			  <tr>
				<th>Nome</th>
				<th>Cognome</th>
				<th>Materia</th>
			  </tr>
			</thead>
			<tfoot>
			  <tr>
				<th>Nome</th>
				<th>Cognome</th>
				<th>Materia</th>
			  </tr>
			</tfoot>
			<tbody>
			  <tr>
				<td>${element.nome}</td>
				<td>${element.cognome}</td>
				<td>${element.materia}</td>
			  </tr>
			  <tr>
				<td>${element.nome}</td>
				<td>${element.cognome}</td>
				<td>${element.materia}</td>
			  </tr>
			  <tr>
				<td>${element.nome}</td>
				<td>${element.cognome}</td>
				<td>${element.materia}</td>
			  </tr>
			</tbody>
		  </table>
		</div>
	  </div>
	  <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
	</div>`
	$("card-container").append(card)
			
		});
		

		
	

		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
