import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<any>("http://localhost:3000/api/jokes");
  }
  login(postData){
    return this.http.post("http://localhost:3000/api/login" , {
      email:postData.email,
      password: postData.password
    })
  }
  getJokeById(id){
    return this.http.get(`/api/jokes/${id}`)
  }
}
