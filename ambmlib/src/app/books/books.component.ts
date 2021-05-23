import {Component, OnInit} from '@angular/core';
import {BooksService} from '../shared/books.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public loading: boolean = true
  public searchString = ''

  constructor( public booksService: BooksService) { }

  ngOnInit() {
    this.booksService.fetchBooks()
      .subscribe(() => {
        this.loading = false
      })
  }

  removeBook(id: number) {
    this.booksService.removeBook(id).subscribe(()=>window.location.reload());
  }

}