import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {



  constructor(private _http: HttpClient) {}
  getprod(id:any):Observable<any>{
    return this._http.get(`http://localhost:3001/product?id=${id}`)
  }

  getcategory(id:any):Observable<any>{
    return this._http.get(`http://localhost:3001/category?id=${id}`)
  }
  getProductById(id:any) :Observable<any>{
    // return this._http.post('http://localhost:3001/product', data);
    return this._http.get(`http://localhost:3001/product?postId=${id}`)
  }

  addProduct(data: any): Observable<any> {
    return this._http.post('http://localhost:3001/product', data);
  }

  addCategory(data: any): Observable<any> {
    return this._http.post<any>('http://localhost:3001/category', data);
  }


  
  editcategory(data: any,id: any): Observable<any> {
    console.log("id",id)
    console.log("data",data)

    return this._http.put(`http://localhost:3001/category/${id}`, data);
  }

  editproduct(data: any,id: any): Observable<any> {
    console.log("id",id)
    console.log("data",data)

    return this._http.put(`http://localhost:3001/product/${id}`, data);
  }



  getcategorylist(): Observable<any> {
    return this._http.get('http://localhost:3001/category');
  }

  getproductslist(): Observable<any> {
    return this._http.get(`http://localhost:3001/product`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3001/category/${id}`);
  }
  deleteProducts(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3001/product/${id}`);
  }
  };

