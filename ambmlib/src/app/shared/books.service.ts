import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Book {
  id: any,
  category: string,
  name: string,
  author: string,
  release_year: number,
  pages: number
}

@Injectable({providedIn: 'root'})
export class BooksService {
  public books: Book[] = []
  url: string = 'http://localhost:3000/books'
  

  constructor(private http: HttpClient) {}
  
  fetchBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
      .pipe(tap(books => this.books = books))
  }

  fetchBooks2() {
    return this.http.get<Book[]>(this.url)
  }

  fetchBook(id : number){
    return this.http.get(this.url + '/' + id);
  }

  removeBook(id: number) {
    // this.books = this.books.filter(t => t.id !== id)
    return this.http.delete(this.url + '/' + id);
  }

  generateBookId() {
    // let length:number = 0;
    return this.fetchBooks2().subscribe(books => books.length);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book)
  }
}