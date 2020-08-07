function IniciarCodigo() {
class vehiculo {
    constructor(marca,modelo,precio){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }
}
class moto extends vehiculo{
    constructor(marca,modelo,cilindrada,precio){
        super(marca,modelo,precio);
        this.cilindrada=cilindrada;
    }

}
class auto extends vehiculo{
    constructor(marca,modelo,puertas,precio){
        super(marca,modelo,precio);
        this.puertas=puertas;
    }
}

let vehiculos = [];
vehiculos.push(new auto("Peugeot", 206, 4, "200.000,00"));
vehiculos.push(new moto("Honda", "Titan", "125c", "60.000,00"));
vehiculos.push(new auto("Peugeot", 208, 5, "250.000,00"));
vehiculos.push(new moto("Yamaha", "YBR", "160c"," 80.500,50"));

vehiculos.forEach(function(item) {
  if (item instanceof auto === true) {
    console.log("Marca: " + item.marca + " // " + "Modelo: " + item.modelo + " // " + "Puertas: " + item.puertas + " // " + "Precio: " + item.precio);
  } else {
    console.log("Marca: " + item.marca + " // " + "Modelo: " + item.modelo + " // " + "Cilindrada: " + item.cilindrada + " // " + "Precio: " + item.precio);
  };
});

vehiculos.sort(function(a, b) {return b.precio - a.precio;});

console.log("Vehículo de mayor precio: " + vehiculos[0].marca + " " + vehiculos[0].modelo);
console.log("Vehículo de menor precio: " + vehiculos[vehiculos.length-1].marca + " " + vehiculos[vehiculos.length-1].modelo);

let resultado = "";

for (let i = 0; i < vehiculos.length; i++) {
  let coincidencia = /[y]/i.test(vehiculos[i].marca);
  if (coincidencia === true) {
    resultado = vehiculos[i];
  }
};

console.log("Vehículo con la letra 'Y': " + resultado.marca + " " + resultado.modelo + " " + resultado.precio);

console.log("De Mayor a Menor Precio:" + "\n");

vehiculos.forEach(function(item) {
  console.log(item.marca + " " + item.modelo + "\n");
});
}