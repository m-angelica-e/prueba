let express =require('express');
let app = express();
let mysql =require('mysql');
app.get('/usuarios/registrar', (req,res)=>{
	let conexion = mysql.createConnection({
		host: 'localhost',
		database: 'prueba',
		user: 'root',
		password: '',
	});

	conexion.connect(err => {
		if(err){
			res.sendStatus(500, 'error de conexion: '+ err.stack);
		return;
		}
		conexion.query('SELECT * FROM usuario', (error, results, fields)=>{
			if(error)
				throw error;

				let users = [];
				results.forEach(result =>{
					users.push(result);
				});
				res.json(users);
				conexion.end();
		});
	});
});
app.get('/usuarios/validarsalario/:salario' , (request, response)=>{
	//response.send('validar salario:' + request.params.salario);
	var res=getRandomArbitrary(1, 4);
	//var res=1;
  	var max=100000000;
  	let salario=parseInt(request.params.salario);
  	switch (res) {
	  case 1:
	    var a1=getRandomArbitrary(0, salario);
	    var a2=getRandomArbitrary(salario, max);
	    var b1=getRandomArbitrary(0, salario);
	    var b2=getRandomArbitrary(0, salario);
	    var c1=getRandomArbitrary(salario, max);
	    var c2=getRandomArbitrary(salario, max);
	    response.json({
	    	a: a1 + "-"+ a2,
	    	b: b1 + "-"+ b2,
	    	c: c1 + "-"+ c2,
	    	respuesta: "La respuesta correcta es A",
	    });
	    break;
	  case 2:
	  	var a1=getRandomArbitrary(0, salario);
	    var a2=getRandomArbitrary(0, salario);
	  	var b1=getRandomArbitrary(0, salario);
	    var b2=getRandomArbitrary(salario, max);
	    var c1=getRandomArbitrary(salario, max);
	    var c2=getRandomArbitrary(salario, max);
	    response.json({
	    	a: a1 + "-"+ a2,
	    	b: b1 + "-"+ b2,
	    	c: c1 + "-"+ c2,
	    	respuesta: "La respuesta correcta es B",
	    });
	   
	    break;
	  case 3:
	    var a1=getRandomArbitrary(0, salario);
	    var a2=getRandomArbitrary(0, salario);
	    var b1=getRandomArbitrary(salario, max);
	    var b2=getRandomArbitrary(salario, max);
	    var c1=getRandomArbitrary(0, salario);
	    var c2=getRandomArbitrary(salario, max);
	    response.json({
	    	a: a1 + "-"+ a2,
	    	b: b1 + "-"+ b2,
	    	c: c1 + "-"+ c2,
	    	respuesta: "La respuesta correcta es C",
	    });
	    break;
		default:response.send("No encontrado");
		break;
	}
	
	function getRandomArbitrary(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}
});

app.listen(3000);