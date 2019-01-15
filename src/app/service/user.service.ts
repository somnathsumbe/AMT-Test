import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  private baseurl:string = 'https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks';
  
  constructor(private http: Http) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseurl}`).map((res) => res.json());
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`).map(res => res.json());
  }
  createUsers(formdata): Observable<any> {
    return this.http.post(`${this.baseurl}`, formdata).map(res => res.json());
  }

  updateUsers(formdata,id): Observable<any> {
    return this.http.put(`${this.baseurl}/${id}`, formdata).map(res => res.json());
  }
}
