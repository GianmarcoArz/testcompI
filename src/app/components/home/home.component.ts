import { Component } from '@angular/core';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];
  numeroArticolo: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        this.posts = result.posts;
        console.log(this.posts);
        this.numeroArticolo = Math.floor(Math.random() * 30);
      })
      .catch((err) => console.log(err));
  }
}
