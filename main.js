const Producto = function( nombre,precio,stock){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}

let producto1= new Producto("buzo canguro", 15000, 30)
let producto2= new Producto("buzo cuello redondo", 13000, 40)
let producto3= new Producto("buzo street", 20000, 30)
let producto4= new Producto("remera oversize", 9000, 50)
let producto5= new Producto("remera look", 8000, 50)
let producto6= new Producto("remera street", 1000, 40)
let producto7= new Producto("pantalon cargo", 16000, 30)
let producto8= new Producto("pantalon mom", 15000, 30)

let lista= [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]

let palabra= prompt("¿que productos queres ver?").toUpperCase()

function filtrarProductos(){
    let palabra= prompt("¿que productos queres ver?").toUpperCase()
    let resultado= lista.filter(  (x)=> x.nombre.toUpperCase().includes(palabra))

    if(resultado.length >0){
        console.table(resultado)     
    }else{
        alert("El producto: " +palabra +" ,no se encuentra")
    }

}