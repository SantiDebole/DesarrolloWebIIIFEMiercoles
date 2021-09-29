let alumnos = {
  nombre: "Santiago",
  edad: 17,
  mostrar: ()=>{
      return `Soy ${alumnos.nombre} y tengo ${alumnos.edad}`;
  }
};
let saludo= `Hola, ${alumnos.nombre} todo bien?`;

ReactDOM.render(
    <div className="row"> 
    <div className="col-6 bg-primary text-white text-center p-4">
    {alumnos.mostrar()}
    </div>
    
    </div>,
    document.getElementById('root')
  );