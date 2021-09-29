/* let resultado=0;

console.log(suma());

console.log(resultado);

function suma(){
    resultado = 10;
    return resultado;
}

let nombre = "Luis";
let apellido = "Navas";
let edad = 47 ;
let llueve = true;
let participantes = ["Junior", "Luis", "Ivana", "Martín", "Sheila", "Chenoa"];
for(let a=0; a <  participantes.length; a++){
    console.log(participantes[a]);
}
participantes.forEach(()=>{console.log});
function render(){
    let contenedor = document.getElementById("root");
contenedor.innerHTML = nombre;
participantes.forEach(part=>contenedor.innerHTML+=
    `<div class='card col-3'>
  <img src='...' class='card-img-top' alt='...'>
  <div class='card-body'>
    <h5 class='card-title'>${part}</h5>
    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href='#' class='btn btn-primary'>Go somewhere</a>
  </div>
</div>`
    );
}
render() */

let texto = "me gusta el helado de dulce de leche un montonzao";
let nombre3 = "Santiago Debole";
// let saludo = "Hola! Soy: " +nombre2+ " y "+texto;
let saludo = `<h3>Hola soy: ${nombre3} y ${texto}</h3>` ;
let contenedor = document.getElementById("root");
contenedor.innerHTML+=saludo;


function nombreCompleto(nombre=" ", apellido=" "){
return `${nombre} ${apellido}`;
}
console.log(nombreCompleto("Santiago", "Debole"));
console.log(nombreCompleto("Santiago"));


/*const nombre_funcion=(nombre,apellido)=>{
return ` con arrow function ${nombre} ${apellido}`;
};

console.log(nombre_funcion("Santiago","Debole")); */