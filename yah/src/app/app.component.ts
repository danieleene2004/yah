import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yah';
  data!: Object;
  constructor(private http: HttpClient)
  {
    this.http.get("https://5000-danieleene2004-yah-x0bno73f2x8.ws-eu107.gitpod.io/simple_json")
    .subscribe(
      (data) => this.data = data
    )
  }
}
