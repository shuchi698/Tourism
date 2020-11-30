import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// API for managing Attractions
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  createAttraction(data): Observable<any> {
    console.log(data);
    const fd=new FormData();

    fd.append('image',data.photo,data.photo.name);
    fd.append('title',data.title);
    fd.append('description',data.description)
    fd.append('latitude',data.latitude)
    fd.append('longitude',data.longitude)
    fd.append('type',data.type);
    console.log("Form Data:"+fd);
    let url = `${this.baseUri}/create`;
    return this.http.post(url, fd,{reportProgress:true,
        observe:'events'
      })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getAttractions() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get employee
  getAttraction(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //attraction by type
  getAType(x:any):Observable<any>
  {
    let url = `${this.baseUri}/getatype/${x}`;
        return this.http.get(url);
  }
  updateAttraction(id, data): Observable<any> {
    //

    console.log(data);
    const fd=new FormData();

    fd.append('image',data.photo,data.photo.name);
    fd.append('title',data.title);
    fd.append('description',data.description)
    fd.append('latitude',data.latitude)
    fd.append('longitude',data.longitude)
    fd.append('type',data.type);
    console.log("Form Data:"+fd);
  //
    let url = `${this.baseUri}/update/${id}`;

    return this.http.put(url, fd)
  }

  deleteAttraction(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
