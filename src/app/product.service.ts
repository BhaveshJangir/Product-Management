import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient = inject(HttpClient)
  lip = [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  ];
  constructor() { }
  getPost(){
     return this.httpClient.get("http://localhost:3000/posts")
  }

  getProducts(){
    return this.httpClient.get("https://dummyjson.com/products")
  }

  getProduct(id:any){
    return this.httpClient.get("https://dummyjson.com/products/"+id)
  }
}
