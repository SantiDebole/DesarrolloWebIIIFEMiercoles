function CrearObjetos(){
    return <div><div id="cabecera"><h2>Objetos</h2><h3>Propiedades y Métodos</h3></div>
    <div id ="pulsador" onClick={()=>ejemploObjetos()}> Probar </div>   
    </div>
 }
class Taxi{
    constructor(tipoMotor,capacidad){
        this.tipoMotor=tipoMotor;
        this.capacidad=capacidad
    }
}

    function ejemploObjetos() {
    
    let coche1 = new Taxi("Diesel",40);
    let coche2 = new Taxi("Gasolina",35);
    alert(`Se ha creado un objeto con tipo de motor: ${coche1.tipoMotor}`)
    alert(`Se ha creado un objeto con tipo de motor: ${coche2.tipoMotor}`)

    alert(`El coche 1 tiene la capacidad ${coche1.capacidad} litros`);
    alert(`El coche 2 tiene la capacidad ${coche2.capacidad} litros`);

}



ReactDOM.render(
  <CrearObjetos/>,
    document.getElementById("root")
);

