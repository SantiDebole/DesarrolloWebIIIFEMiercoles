let elemento = document.getElementById(`root`)

const nombreCompleto=(nombre=" ", apellido=" ")=>{
    let nc=`<h2>Mi nombre es: ${nombre} ${apellido}</h2>`;
    return nc;
};

elemento.innerHTML+=nombreCompleto("Santiago ")
elemento.innerHTML+=nombreCompleto("Santiago Agustín")
elemento.innerHTML+=nombreCompleto("Santiago Agustín Debole")

