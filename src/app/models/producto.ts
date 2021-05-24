export class Producto {
  _id?: number;
  nombre: string;
  categoria: string; 
  ubicacion: string; 
  precio: number;
  
  constructor(name:string, categoria:string, ubicacion:string, precio:number){
    this.nombre = name;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.precio = precio;
  }
}