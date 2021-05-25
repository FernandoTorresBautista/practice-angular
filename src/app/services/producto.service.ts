import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = 'http://localhost:4000/api/productos/';

  constructor(private http:HttpClient) { }

  // return an observable 
  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProducto(id:string):Observable<any> {
    return this.http.delete(this.url + id);
  }
}
