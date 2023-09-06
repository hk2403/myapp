import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public book: any = [];
  public column: string = "";
  public isTrue:boolean=false;
  
  

  constructor(private _booksService: BooksService) {

    _booksService.getBooks().subscribe(
      (data: any) => {

        this.book = data.data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
  getSortedBooksbyTitle() {
    this.book.books.sort((a: any, b: any) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  }

  getSortedBooksbyDate() {
    this.book.books.sort((a: any, b: any) => {
      if (a.PublishDate < b.PublishDate) return -1;
      if (a.PublishDate > b.PublishDate) return 1;
      return 0;
    });
  }

  deleteBook(index: number) {
    if (index >= 0 && index < this.book.books.length) {
      this.book.books.splice(index, 1);
    }
  }
  add(){
    this.isTrue=true;
  }

  

  
}
