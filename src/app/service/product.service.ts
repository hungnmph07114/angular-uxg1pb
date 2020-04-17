import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { data } from "../mocdat";
import { Product } from "../Product";

import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  products = data;
  private api:string = "https://5e7c7721a917d7001668354d.mockapi.io/Product";
  constructor(private http :HttpClient ) {}
  getProducts(): Observable<Product[]> {
    // Lay danh sach san pham
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }
   getProducts1(id): Observable<Product[]> {
    // Lay danh sach san pham
    // return this.products;
    return this.http.get<Product[]>(`${this.api}/${id}`);
  }
  getProduct(id) {
    return this.products.find(product => product.id == id);
  }
  removeProduct(id) {
    return (this.products = this.products.filter(product => product.id != id));
    // Xoa san pham
  }
  removeProduct1(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
   // return (this.products = this.products.filter(product => product.id != id));
    // Xoa san pham
  }
  addProduct(product) {
    let newObj = { ...product };
    this.products.push(newObj);
    // them san pham
  }
    addProduct1(product) : Observable<Product> {
    // let newObj = { ...product };
    // this.products.push(newObj);
    // them san pham
    return this.http.post<Product>(`${this.api}`,product)
  }
  editProduct(product) {
    return this.products.map(item => (item.id === product.id ? product : item));
    // sua san pham
  }
  updateproduct(product): Observable<Product>{
return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
}
