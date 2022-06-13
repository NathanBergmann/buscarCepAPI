/*function chamar_api(){
	fetch('https://brasilapi.com.br/api/cep/v1/{cep}')
	  .then(response => response.json())
	  .then(data => exibir_cep());
}*/

function exibir_cep(){
	
	varCep = document.getElementById("cep")
	fetch('https://brasilapi.com.br/api/cep/v1/' + varCep.value)
	.then(response => response.json())
	.then(data => coletarDados(data))
	

}

function coletarDados(data){
	console.log(data);
	document.getElementById("iCep").value = data.cep
	document.getElementById("iEstado").value = data.state
	document.getElementById("iCidade").value = data.city
	document.getElementById("iBairro").value = data.neighborhood
	document.getElementById("iRua").value = data.street

}
/*
function consultar_todas_as_racas_api(){
	fetch('https://dog.ceo/api/breeds/list/all')
	  .then(response => response.json())
	  .then(data =>  exibir_todas_as_racas(data));
}

function exibir_todas_as_racas(data){
	const div = document.getElementById("lista");
	div.innerHTML = "";
	Object.keys(data.message).forEach(key => {
	  console.log(key, data[key]);
	  var div = document.getElementById("lista");
	  const paragrafo = document.createElement("p");
	  const texto = document.createTextNode(key);
	  paragrafo.appendChild(texto);
	  div.appendChild(paragrafo);
	});
}*/