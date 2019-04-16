var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards,app.onSuccess)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);

		
	},
	onSuccess:function(jsonData){
		let list = jsonData.commissionList;
		   list.forEach(element => {
			   let html = `<tr>
			   <td>${element.name}</td>
			   <td>${element.surname}</td>
			   <td>${element.subject}</td>
			 </tr>`;
		   $("#dataTable tbody").append(html);
		   });
		let listup = jsonData.update;
		listup.forEach(element => {
			let upd = `<div class="card-footer small text-muted">Updated ${element.date} at ${element.time}</div>`;
		$("#card").after(upd);
		});
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
