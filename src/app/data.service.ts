import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:5000/';
  create(data: any) {
    console.log(data);
    
    return this.http.post(`${this.baseUrl}post`,data);
  }

  read() {
   return this.http.get(this.baseUrl);
  }

  update(id: number, data: any) {
    // Implement the update operation here.
  }

  delete(id: number) {
    // Implement the delete operation here.
  }

}
