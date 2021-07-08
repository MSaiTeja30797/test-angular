import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url:string = 'assets/employee.json'; 
  
  constructor(private httpClient:HttpClient) { }
  getallempl(){
     return this.httpClient.get(this.url)
}
}
