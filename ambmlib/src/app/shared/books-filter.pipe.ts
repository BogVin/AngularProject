import {Pipe, PipeTransform} from '@angular/core';
import {Book} from './books.service';

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {
  transform(books: Book[], search: string = ''): Book[] {
    if (!search.trim()) {
      return books
    }

    return books.filter(book => {
      return book.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
