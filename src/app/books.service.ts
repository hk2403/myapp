import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public url:string="https://s3.amazonaws.com/api-fun/books.json";

  constructor(private _httpClient:HttpClient) { }

  getBooks():Observable<any>{
    return this._httpClient.get(this.url);
  }

  // getSortedBooks(column:any):Observable<any>{
  //   return this._httpClient.get(this.url+"?sortBy="+column+"&order='asc'")
  // }
}
