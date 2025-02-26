import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  constructor(private http:HttpClient){ }
  apiUrl = "http://localhost:3000/api"

  addCita (body:any){
    return this.http.post(`${this.apiUrl}/addCita`,body)
  }


}
