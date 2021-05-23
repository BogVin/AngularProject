import {Component, OnInit} from '@angular/core';
import {Book, BooksService} from '../shared/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {

  // title: string;
    
       category: string = ""
       name: string = ""
       author: string = ""
       release_year: number = 0
       pages: number = 0
  
  constructor(private booksService: BooksService) {
  }


  ngOnInit() {
  }

  addBook() {
    let book: Book = {
      id: this.booksService.generateBookId().unsubscribe(),
      category: this.category,
      name: this.name,
      author: this.author,
      release_year: this.release_year,
      pages: this.pages
    }

    this.booksService.addBook(book).subscribe(()=>window.location.reload());
    // this.title = ''
  }

}
